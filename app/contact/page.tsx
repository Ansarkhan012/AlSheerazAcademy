'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  User,
  MessageSquare,
  Smartphone,
  Globe,
  Send,
  CheckCircle,
  X,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  mobile: string;
  email: string;
  country: string;
  message: string;
  website?: string; // honeypot
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    country: 'USA',
    message: '',
    website: '',
  });

  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check
    if (form.website) return;

    setLoading(true);
    setIsError(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.mobile,
          country: form.country,
          message: form.message,
        }
      );

      // Admin WhatsApp only
      // const adminMsg = `New Admission Inquiry%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.mobile}%0ACountry: ${form.country}%0AMessage: ${form.message}`;

      // window.open(
      //   `https://wa.me/${process.env.NEXT_PUBLIC_ADMIN_WHATSAPP}?text=${adminMsg}`,
      //   '_blank'
      // );

      setPopupMessage(
        `Thank you ${form.name}! Your inquiry has been received. Our team will contact you within 24 hours.`
      );
      setShowPopup(true);

      setForm({
        name: '',
        mobile: '',
        email: '',
        country: 'USA',
        message: '',
        website: '',
      });
    } catch (err) {
      setIsError(true);
      setPopupMessage(
        'Sorry! Message could not be sent. Please contact us directly on WhatsApp.'
      );
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
     
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

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-3">
          Admission inquiries & course information
        </p>
      </div>

      <section className="max-w-6xl mb-10 mx-auto px-4 grid lg:grid-cols-2 gap-10">
        {/* FORM */}
        <div style={{
          backgroundImage: `url('/images/pattern.png')`
        }}
         className="bg-green-900 text-white rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Quick Admission Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              
            />

            <Input icon={<User />} name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
            <Input
              icon={<Smartphone />}
              name="mobile"
              placeholder="+923001234567"
              value={form.mobile}
              onChange={handleChange}
              className="bg-gray-50"
              
            />
            <Input icon={<Mail />} name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="bg-gray-50" />

            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-50 text-black"
            >
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Pakistan</option>
              <option>UAE</option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-50 text-black"
            />

            <button
              disabled={loading}
              className="w-full bg-black py-4 rounded-xl flex justify-center items-center gap-2"
            >
              {loading ? 'Sending...' : <>
                <Send /> Send Message
              </>}
            </button>
          </form>
        </div>

        {/* INFO */}
        <div style={{
          backgroundImage: `url('/images/pattern.png')`
        }}
         className="bg-[#847645] text-white rounded-3xl p-8">
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

/* Reusable Components */
function Input({ icon, className = '', ...props }: any) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-3 text-gray-500">
        {icon}
      </span>
      <input
        {...props}
        required
        className={`w-full pl-10 p-3 rounded-xl text-black bg-white ${className}`}
      />
    </div>
  );
}


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
