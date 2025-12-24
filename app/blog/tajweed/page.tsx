import CTA from "@/components/CTA";
import React from "react";

export default function Page() {
  // Sirf "tajweed" blog ke liye
//   if (params.name !== "tajweed") {
//     return <div className="p-10 text-center">Blog not found</div>;
//   }
// { params }: { params: { name: string } }

  return (
    <>
    <section className="max-w-4xl mx-auto px-5 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        The Importance of Tajweed in Quran Recitation
      </h1>

      <p className="mb-4 text-gray-700">
        Reciting the Holy Quran is not just about reading words — it is about
        reciting Allah’s words correctly, beautifully, and respectfully. This is
        why <strong>Tajweed</strong> is extremely important. At{" "}
        <strong>Al Sheeraz Islamic School</strong>, we focus on helping students
        learn Quran properly through professional{" "}
        <strong>online Quran classes</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        What Is Tajweed?
      </h2>
      <p className="mb-4 text-gray-700">
        Tajweed means giving every letter of the Quran its correct pronunciation,
        proper articulation (Makharij), and observing the rules of recitation.
        The Quran was revealed with Tajweed, and learning it is essential for
        anyone who wants to <strong>learn Quran</strong> correctly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Why Tajweed Is Important in Quran Recitation
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          <strong>Preserves the Meaning:</strong> Wrong pronunciation can change
          the meaning of Quranic words.
        </li>
        <li>
          <strong>Sunnah of Prophet ﷺ:</strong> The Prophet Muhammad ﷺ recited
          the Quran with Tajweed.
        </li>
        <li>
          <strong>Improves Spiritual Connection:</strong> Proper Tajweed brings
          beauty and peace to recitation.
        </li>
        <li>
          <strong>Avoids Mistakes:</strong> Tajweed protects from major and minor
          recitation errors.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Learn Tajweed with Al Sheeraz Islamic School
      </h2>
      <p className="mb-4 text-gray-700">
        <strong>Al Sheeraz Islamic School</strong> offers professional{" "}
        <strong>online Quran classes</strong> for kids, adults, beginners, and
        advanced learners. Our experienced teachers help students learn Quran
        with Tajweed step by step.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Benefits of Online Quran Classes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Learn Quran from anywhere in the world</li>
        <li>Flexible class timings</li>
        <li>Male & female teachers available</li>
        <li>Affordable monthly fee</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Start Learning Quran with Tajweed Today
      </h2>
      <p className="mb-4 text-gray-700">
        Learning Tajweed is an act of worship. Join{" "}
        <strong>Al Sheeraz Islamic School</strong> today and improve your Quran
        recitation through our trusted{" "}
        <strong>online Quran classes</strong>.
      </p>

      <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mt-6">
        “The best of you are those who learn the Quran and teach it.”
        <br />— Sahih Bukhari
      </blockquote>
    </section>
    <section>
        <CTA />
    </section>
    </>
  );
}
