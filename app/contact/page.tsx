'use client';

import { useState, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import {
  Phone,
  Mail,
  User,
  Smartphone,
  Send,
  CheckCircle,
  X,
} from 'lucide-react';

type FormData = {
  name: string;
  mobile: string;
  email: string;
  country: string;
  message: string;
  website?: string; // honeypot
};

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      country: 'USA',
      message: '',
      website: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    if (data.website) return; // honeypot

    setIsError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setPopupMessage(
        `Thank you ${data.name}! Your inquiry has been received. Our team will contact you within 24 hours.`
      );
      setShowPopup(true);
      reset();
    } catch {
      setIsError(true);
      setPopupMessage(
        'Sorry! Message could not be sent. Please contact us directly on WhatsApp.'
      );
      setShowPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <div className="text-center">
              {!isError && (
                <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-3" />
              )}
              <h3 className="text-2xl font-bold mb-2">
                {isError ? 'Oops!' : 'Thank You'}
              </h3>
              <p className="text-gray-600">{popupMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl text-green-700 font-bold mb-2">Contact</h1>
        <h1 className="text-3xl font-bold">Al Sheeraz Islamic School</h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto">
          We are proud of ourselves as the premier online platform for E-services worldwide.
          Our students appreciate our friendly, professional, and cooperative approach.
        </p>
      </div>

      <section className="max-w-6xl mb-10 mx-auto px-4 grid lg:grid-cols-2 gap-10">
        {/* FORM */}
        <div
          style={{ backgroundImage: `url('/images/pattern.png')` }}
          className="bg-green-900 text-white rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Quick Admission Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Honeypot */}
            <input type="text" className="hidden" {...register('website')} />

            <Input
              icon={<User />}
              placeholder="Full Name"
              {...register('name', { required: true })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <Input
  icon={<Smartphone />}
  placeholder="+923001234567"
  {...register('mobile', {
    required: 'Mobile number is required',
    pattern: {
      value: /^\+\d{1,3}\d{6,12}$/,
      message: 'Enter a valid international phone number (+92...)',
    },
  })}
/>
{errors.mobile && (
  <p className="text-red-500 text-sm">{errors.mobile.message}</p>
)}

            <Input
  icon={<Mail />}
  type="email"
  placeholder="Email Address"
  {...register('email', {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Invalid email address',
    },
  })}
/>
{errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <select
              {...register('country')}
              className="w-full p-3 rounded-xl bg-gray-50 text-black"
            >
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Pakistan</option>
              <option>UAE</option>
            </select>

            <textarea
              rows={4}
              placeholder="Your message..."
              {...register('message', { required: true })}
              className="w-full p-3 rounded-xl bg-gray-50 text-black"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <button
              disabled={isSubmitting}
              className="w-full bg-black py-4 rounded-xl flex justify-center items-center gap-2"
            >
              {isSubmitting ? 'Sending...' : <>
                <Send /> Send Message
              </>}
            </button>
          </form>
        </div>

        {/* INFO */}
        <div
          style={{ backgroundImage: `url('/images/pattern.png')` }}
          className="bg-[#847645] text-white rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            More Ways to Reach Us
          </h2>

          <div className="relative w-full h-64 md:h-72 mb-6">
            <Image
              src="/images/3rd.webp"
              alt="Quran Learning"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>

          <div className="space-y-4">
            <InfoItem
              icon={<Phone />}
              title="WhatsApp"
              text="+92 349 9624807"
              link="https://wa.me/923499624807"
            />
            <InfoItem
              icon={<Mail />}
              title="Email"
              text="info.alsheeraz@gmail.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= Reusable Components ================= */

const Input = forwardRef<HTMLInputElement, any>(
  ({ icon, className = '', ...props }, ref) => {
    return (
      <div className="relative">
        <span className="absolute left-3 top-3 text-gray-500">
          {icon}
        </span>
        <input
          ref={ref}
          {...props}
          className={`w-full pl-10 p-3 rounded-xl text-black bg-white ${className}`}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

function InfoItem({ icon, title, text, link }: any) {
  const Wrapper = link ? 'a' : 'div';
  return (
    <Wrapper
      href={link}
      target="_blank"
      className="flex gap-3 items-center bg-white/10 p-4 rounded-xl"
    >
      <div className="w-10 h-10 bg-green-600 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{text}</p>
      </div>
    </Wrapper>
  );
}
