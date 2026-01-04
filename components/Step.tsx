import { Book, BookOpenCheck, Laptop } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Step() {
  return (
    <section className="my-14 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center my-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            <span className="text-green-800">Learn Quran Online</span> with Tajweed
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Begin your journey of online Quran learning through a simple
            three-step process with our qualified Quran instructors.
          </p>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-3 px-12 gap-10">

         
          <div style={{
            backgroundImage: 'url("/images/pattern.png")'
          }} className="text-center p-6 rounded-xl border">
            <span className="block mb-2 text-green-700 text-2xl font-bold">
              Step 1
            </span>

            <BookOpenCheck className="w-10 h-10 mx-auto mb-4 text-green-600" />

            <h2 className="text-xl font-semibold mb-3">
              Send Inquiry
            </h2>

            <p className="text-gray-600 leading-relaxed mb-12">
              Fill out the form to begin your journey of online Quran learning
              with our outstanding Quran instructors. Our team will contact you
              to arrange your trial classes.
            </p>

            <Link href={"/contact"} className=" py-3 px-5 rounded-3xl bg-green-700 text-white font-semibold hover:bg-green-800">
              Send Inquiry
            </Link>
          </div>

          
          <div style={{
            backgroundImage: 'url("/images/pattern.png")'
          }} className="text-center p-6 rounded-xl border">
            <span className="block mb-2 text-green-700 text-2xl font-bold">
              Step 2
            </span>

            <Book className="w-10 h-10 mx-auto mb-4 text-green-600" />

            <h2 className="text-xl font-semibold mb-3">
              Free Trial Online
            </h2>

            <p className="text-gray-600 leading-relaxed mb-12">
              Upon enrollment, review your schedule and join our online platform
              for three days of complimentary Quran classes without requiring
              payment or credit card information.
            </p>

            <Link href={"/contact"} className="my-4 py-3 px-5 rounded-3xl bg-green-700 text-white font-semibold hover:bg-green-800">
              Send Trial
            </Link>
          </div>

          
          <div style={{
            backgroundImage: 'url("/images/pattern.png")'
          }} className="text-center p-6 rounded-xl border">
            <span className="block mb-2 text-green-700 text-2xl font-bold">
              Step 3
            </span>

            <Laptop className="w-10 h-10 mx-auto mb-4 text-green-600" />

            <h2 className="text-xl font-semibold mb-3">
              Get Quick Admission
            </h2>

            <p className="text-gray-600 leading-relaxed mb-12">
              If you find satisfaction with the teachers during the free trial
              classes, register for regular sessions by choosing a suitable
              monthly plan.
            </p>

            <Link href={"/contact"} className="mt-4 py-3 px-5 rounded-3xl bg-green-700 text-white font-semibold hover:bg-green-800">
              Quick Admission
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
