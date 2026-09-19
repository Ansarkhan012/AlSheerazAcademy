import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { escapeHtml, MAX_CONTACT_BODY_BYTES, validateContactSubmission } from '@/lib/contact-validation';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function clientIdentifier(req: Request) {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || req.headers.get('x-real-ip')
    || 'unknown';
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const current = rateLimitStore.get(identifier);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function errorResponse(message: string, status: number, errors?: Record<string, string>) {
  return NextResponse.json({ success: false, message, errors }, { status });
}

export async function POST(req: Request) {
  if (!req.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return errorResponse('Content-Type must be application/json.', 415);
  }

  const declaredLength = Number(req.headers.get('content-length') || '0');
  if (Number.isFinite(declaredLength) && declaredLength > MAX_CONTACT_BODY_BYTES) {
    return errorResponse('Submission is too large.', 413);
  }

  if (isRateLimited(clientIdentifier(req))) {
    return errorResponse('Too many requests. Please wait before trying again.', 429);
  }

  try {
    const body = await req.text();
    if (Buffer.byteLength(body, 'utf8') > MAX_CONTACT_BODY_BYTES) {
      return errorResponse('Submission is too large.', 413);
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(body);
    } catch {
      return errorResponse('Invalid JSON body.', 400);
    }

    const validation = validateContactSubmission(parsed);
    if (!validation.success) {
      return errorResponse('Please correct the highlighted fields.', 400, validation.errors as Record<string, string>);
    }

    const { name, email, mobile, country, message } = validation.data;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      return errorResponse('The contact service is temporarily unavailable.', 503);
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Al Sheeraz Islamic School" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: '📩 New Admission Inquiry',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Mobile:</b> ${escapeHtml(mobile)}</p>
        <p><b>Country:</b> ${escapeHtml(country)}</p>
        <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Your inquiry has been received.' });
  } catch {
    return errorResponse('Message could not be sent. Please try again or contact us on WhatsApp.', 500);
  }
}
