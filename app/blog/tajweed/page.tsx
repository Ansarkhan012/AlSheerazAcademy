import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-5 py-10">
        {/* Blog Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
              Quran Learning
            </span>
            <span>•</span>
            <span>September 15, 2025</span>
            <span>•</span>
            <span>3 min read</span>
            <span>•</span>
            <span>By Sheeraz Ahmed</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            The Importance of Tajweed in Quran Recitation
          </h1>
          <p className="text-xl text-gray-600 italic">
            "And recite the Quran with measured recitation" (Quran 73:4)
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/images/importance.avif" 
            alt="Importance of Tajweed"
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 p-6 rounded-xl mb-10 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">💡 Key Takeaway</h2>
          <p className="text-gray-700">
            Reciting the Holy Quran is not just about reading words — it is about
            reciting Allah's words correctly, beautifully, and respectfully. This is
            why <strong className="text-green-700">Tajweed</strong> is extremely important. At{" "}
            <strong className="text-green-700">Al Sheeraz Islamic School</strong>, we focus on helping students
            learn Quran properly through professional{" "}
            <strong className="text-green-700">online Quran classes</strong>.
          </p>
        </div>

        {/* Quranic Verse Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl mb-10 text-center">
          <div className="text-right mb-4">
            <p className="text-2xl leading-loose font-arabic">﴾ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴿</p>
          </div>
          <p className="text-lg text-gray-700 mb-2">"And recite the Quran with measured recitation"</p>
          <p className="text-gray-600">— Surah Al-Muzzammil (73:4)</p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        {/* What Is Tajweed? */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 flex items-center gap-3">
          <span className="text-green-600">✦</span>
          What Is Tajweed?
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
          <p className="mb-4 text-gray-700 text-lg leading-relaxed">
            Tajweed (تَجْوِيد) linguistically means "to improve" or "to make better". In Islamic terms, it refers to the set of rules governing the correct pronunciation of the Quranic Arabic letters and their characteristics.
          </p>
          <p className="mb-4 text-gray-700 text-lg leading-relaxed">
            Tajweed means giving every letter of the Quran its correct pronunciation,
            proper articulation (Makharij), and observing the rules of recitation.
            The Quran was revealed with Tajweed, and learning it is essential for
            anyone who wants to <strong className="text-green-700">learn Quran</strong> correctly.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-gray-600 italic">
              "The Prophet ﷺ said: 'The one who is proficient with the Quran will be with the noble and righteous scribes (angels), and the one who reads it and stumbles over it, finding it difficult, will have a double reward.'"
              <br />
              <span className="text-gray-500">— Sahih Muslim</span>
            </p>
          </div>
        </div>

        {/* Why Tajweed Is Important */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 flex items-center gap-3">
          <span className="text-green-600">✦</span>
          Why Tajweed Is Important in Quran Recitation
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
            <div className="text-green-600 text-2xl mb-3">❶</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Preserves the Meaning</h3>
            <p className="text-gray-700">
              Wrong pronunciation can change the meaning of Quranic words completely. For example, changing a single harakat (vowel) can alter the meaning dramatically.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
            <div className="text-green-600 text-2xl mb-3">❷</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Sunnah of Prophet ﷺ</h3>
            <p className="text-gray-700">
              The Prophet Muhammad ﷺ recited the Quran with perfect Tajweed as taught to him by Jibreel (عليه السلام). Following his example is an act of worship.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
            <div className="text-green-600 text-2xl mb-3">❸</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Spiritual Connection</h3>
            <p className="text-gray-700">
              Proper Tajweed brings beauty, rhythm, and peace to recitation, enhancing the spiritual experience and connection with Allah's words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
            <div className="text-green-600 text-2xl mb-3">❹</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Avoids Major Mistakes</h3>
            <p className="text-gray-700">
              Tajweed protects from لَحْن (Lahn) - recitation errors that can change meaning or invalidate prayer. Learning Tajweed is fard kifayah on the Muslim community.
            </p>
          </div>
        </div>

        {/* Quranic Verse About Learning */}
        <div className="bg-green-50 p-8 rounded-2xl mb-10">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Quranic Guidance</h3>
          <div className="text-right mb-4">
            <p className="text-2xl leading-loose font-arabic">﴾ وَاتَّقُوا اللَّهَ وَيُعَلِّمُكُمُ اللَّهُ ﴿</p>
          </div>
          <p className="text-lg text-gray-700 mb-2 text-center">"And fear Allah; and Allah teaches you"</p>
          <p className="text-gray-600 text-center">— Surah Al-Baqarah (2:282)</p>
        </div>

        {/* Learn Tajweed with Al Sheeraz Islamic School */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 flex items-center gap-3">
          <span className="text-green-600">✦</span>
          Learn Tajweed with Al Sheeraz Islamic School
        </h2>
        <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-8 rounded-2xl mb-10">
          <p className="mb-6 text-gray-700 text-lg">
            <strong className="text-green-700">Al Sheeraz Islamic School</strong> offers professional{" "}
            <strong className="text-green-700">online Quran classes</strong> for kids, adults, beginners, and
            advanced learners. Our experienced teachers help students learn Quran
            with Tajweed step by step.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-semibold">Expert Teachers</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">📱</div>
              <p className="font-semibold">Online Platform</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
              <p className="font-semibold">All Ages</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">⏰</div>
              <p className="font-semibold">Flexible Timing</p>
            </div>
          </div>
        </div>

        {/* Benefits of Online Quran Classes */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 flex items-center gap-3">
          <span className="text-green-600">✦</span>
          Benefits of Online Quran Classes
        </h2>
        
        <div className="bg-white rounded-xl p-6 shadow-sm mb-10">
          <ul className="space-y-4">
            {[
              "Learn Quran from anywhere in the world - No geographical limitations",
              "Flexible class timings that suit your schedule",
              "Male & female teachers available for comfortable learning",
              "Affordable monthly fee with value-for-money education",
              "One-on-one attention and personalized learning plans",
              "Progress tracking and regular assessments",
              "Interactive learning tools and digital resources",
              "Safe and secure online learning environment for kids"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Final Call to Action */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Start Learning Quran with Tajweed Today
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Learning Tajweed is an act of worship that brings you closer to Allah. 
            Join thousands of students who have improved their Quran recitation 
            through our trusted <strong className="text-green-700">online Quran classes</strong>.
          </p>
          
          <div className="bg-gray-900 text-white p-8 rounded-2xl max-w-2xl mx-auto mb-10">
            <p className="text-2xl mb-4">"The best of you are those who learn the Quran and teach it."</p>
            <p className="text-gray-300">— Sahih Bukhari</p>
          </div>

          <p className="text-lg text-gray-600 mb-4">
            Ready to begin your Tajweed journey?
          </p>
          <Link href={"/contact"} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
            Enroll Now
          </Link>
        </div>

        {/* Tags */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-wrap gap-2">
            {["Tajweed", "Quran", "Recitation", "Online Learning", "Islamic Education", "Quran Tajweed", "Arabic Pronunciation", "Quran Classes"].map((tag) => (
              <span 
                key={tag}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4">
        <CTA />
      </section>
    </>
  );
}