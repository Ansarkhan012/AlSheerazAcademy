import type { ContactField, ContactSubmission } from "@/lib/contact";

const EMAIL_PATTERN = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;
const PHONE_PATTERN = /^\+?[0-9][0-9 ()-]{6,19}$/;

const limits = {
  name: 100,
  mobile: 25,
  email: 254,
  country: 80,
  message: 2000,
  website: 200,
} as const;

export const MAX_CONTACT_BODY_BYTES = 16 * 1024;

export type ContactValidationResult =
  | { success: true; data: ContactSubmission }
  | { success: false; errors: Partial<Record<ContactField, string>> };

function normalizeSingleLine(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function normalizeMessage(value: unknown) {
  return typeof value === "string"
    ? value.trim().replace(/\r\n?/g, "\n").replace(/[\t ]+/g, " ")
    : "";
}

export function validateContactSubmission(input: unknown): ContactValidationResult {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { success: false, errors: { message: "Invalid submission." } };
  }

  const raw = input as Record<string, unknown>;
  const data: ContactSubmission = {
    name: normalizeSingleLine(raw.name),
    mobile: normalizeSingleLine(raw.mobile),
    email: normalizeSingleLine(raw.email).toLowerCase(),
    country: normalizeSingleLine(raw.country),
    message: normalizeMessage(raw.message),
    website: normalizeSingleLine(raw.website),
  };
  const errors: Partial<Record<ContactField, string>> = {};

  if (data.website) errors.website = "Invalid submission.";
  if (data.name.length < 2 || data.name.length > limits.name) errors.name = "Enter a name between 2 and 100 characters.";
  if (!PHONE_PATTERN.test(data.mobile) || data.mobile.length > limits.mobile) errors.mobile = "Enter a valid phone number.";
  if (!EMAIL_PATTERN.test(data.email) || data.email.length > limits.email) errors.email = "Enter a valid email address.";
  if (!data.country || data.country.length > limits.country) errors.country = "Select or enter a valid country.";
  if (data.message.length < 2 || data.message.length > limits.message) errors.message = "Enter a message between 2 and 2000 characters.";
  if ((data.website?.length ?? 0) > limits.website) errors.website = "Invalid submission.";

  return Object.keys(errors).length ? { success: false, errors } : { success: true, data };
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}
