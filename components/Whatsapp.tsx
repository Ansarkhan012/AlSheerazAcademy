"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923499624807?text=Assalamualaikum%20I%20want%20to%20know%20about%20Quran%20classes"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center
                 w-14 h-14 rounded-full bg-green-500 text-white
                 shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}


