import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "The Importance of Tajweed in Quran Recitation – Learn Tajweed Online Correctly",
  description:
    "Learn the importance of Tajweed in Quran recitation and why correct pronunciation matters. Join professional online Quran classes with Tajweed for kids and adults.",
  keywords: [
    "importance of tajweed in quran recitation",
    "learn tajweed online",
    "tajweed rules for beginners",
    "online quran classes with tajweed",
    "quran recitation with tajweed",
    "benefits of tajweed",
  ],
};

export default function Page() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-5 py-10">
        {/* ================= Blog Header ================= */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
              Quran Learning
            </span>
            <span>•</span>
            <span>September 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Sheeraz Ahmed</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            The Importance of Tajweed in Quran Recitation
          </h1>

          <p className="text-xl text-gray-600 italic">
            “And recite the Quran with measured recitation” (Quran 73:4)
          </p>
        </div>

        {/* ================= Featured Image ================= */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/importance.avif"
            alt="Importance of Tajweed in Quran Recitation"
            width={900}
            height={450}
            className="w-full h-64 md:h-96 object-cover"
            priority
          />
        </div>

        {/* ================= Key Takeaway ================= */}
        <div className="bg-blue-50 p-6 rounded-xl mb-10 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            💡 Key Takeaway
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Reciting the Holy Quran is not just about reading words — it is about
            reciting Allah’s words correctly, beautifully, and respectfully. This
            is why <strong className="text-green-700">Tajweed</strong> is essential.
            Learning Tajweed protects the meaning of the Quran and improves your
            spiritual connection with Allah. At{" "}
            <strong className="text-green-700">
              Al Sheeraz Islamic School
            </strong>
            , we help students learn Quran properly through structured{" "}
            <strong className="text-green-700">
              online Quran classes with Tajweed
            </strong>
            .
          </p>
        </div>

        {/* ================= Introduction ================= */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">
          Why Is Tajweed Important?
        </h2>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The Quran is the literal word of Allah, revealed in the Arabic language.
          Because Arabic is a precise language, even a small pronunciation error
          can change the meaning of a verse completely. This is why understanding
          the <strong>importance of Tajweed in Quran recitation</strong> is crucial
          for every Muslim.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Tajweed ensures that every letter is pronounced from its correct
          articulation point (Makharij) and with its proper characteristics
          (Sifaat). Without Tajweed, a person may unknowingly make serious
          mistakes while reciting the Quran.
        </p>

        
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl mb-10 text-center">
          <p className="text-2xl leading-loose font-arabic text-right mb-4">
            ﴾ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴿
          </p>
          <p className="text-lg text-gray-700">
            “And recite the Quran with measured recitation”
          </p>
          <p className="text-gray-600 mt-1">
            — Surah Al-Muzzammil (73:4)
          </p>
        </div>

        
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          What Is Tajweed?
        </h2>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Tajweed (تجويد) linguistically means “to improve” or “to make better”.
          In Islamic terminology, Tajweed refers to the rules that govern the
          correct pronunciation of Quranic letters.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Tajweed involves learning how long to stretch sounds (Madd), when to
          merge letters (Idgham), when to hide sounds (Ikhfa), and how to pronounce
          letters from their correct articulation points. The Quran was revealed
          with Tajweed, and reciting it correctly is an act of worship.
        </p>


        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">
          Importance of Tajweed in Quran Recitation
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              title: "Preserves the Meaning of the Quran",
              text: "Incorrect pronunciation can change the meaning of Quranic words. Tajweed protects the original message of Allah.",
            },
            {
              title: "Following the Sunnah of Prophet ﷺ",
              text: "The Prophet Muhammad ﷺ recited the Quran with perfect Tajweed. Following his method is a Sunnah.",
            },
            {
              title: "Avoids Major Recitation Mistakes",
              text: "Tajweed protects from Lahn Jali and Lahn Khafi — mistakes that can affect meaning and prayer validity.",
            },
            {
              title: "Strengthens Spiritual Connection",
              text: "Proper Tajweed adds beauty, rhythm, and tranquility to Quran recitation, improving focus and humility.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">
          Learn Tajweed Online with Al Sheeraz Islamic School
        </h2>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <strong className="text-green-700">
            Al Sheeraz Islamic School
          </strong>{" "}
          offers professional{" "}
          <strong className="text-green-700">
            online Quran classes with Tajweed
          </strong>{" "}
          for kids, adults, beginners, and advanced learners. Our experienced
          teachers guide students step by step to ensure correct Quran recitation.
        </p>

        <ul className="space-y-3 mb-10">
          {[
            "One-to-one online Quran classes",
            "Qualified male & female teachers",
            "Flexible class timings",
            "Affordable monthly fees",
            "Safe online learning for kids",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

 
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Start Learning Quran with Tajweed Today
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Learning Tajweed is an act of worship. Improve your Quran recitation
            and strengthen your connection with Allah through trusted online Quran
            classes.
          </p>

          <Link
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105"
          >
            Enroll Now
          </Link>
        </div>

      
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-wrap gap-2">
            {[
              "Tajweed",
              "Quran Recitation",
              "Learn Tajweed Online",
              "Online Quran Classes",
              "Islamic Education",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      
      <section className="mt-6">
        <CTA />
      </section>
    </>
  );
}
