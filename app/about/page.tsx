import About from "@/components/About";
import { School } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <>
    <section
      style={{
        backgroundImage: "url('/images/1st.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative py-20 px-4 text-white"
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
          <School className="w-5 h-5 text-green-300" />
          <span className="text-sm font-medium">
            About Our Institution
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          About <span className="text-green-300">Al Sheeraz Islamic School</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
          Al Sheeraz Islamic School is committed to providing quality Islamic
          and Quranic education in a disciplined and nurturing environment.
          Our mission is to build strong moral values, Islamic character,
          and academic excellence in every student.
        </p>
      </div>
    </section>

    <About />
    </>
  );
}
