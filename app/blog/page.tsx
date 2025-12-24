import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  User,
  Clock,
  Tag,
  ChevronRight,
  Search,
  BookOpen,
  MessageSquare,
} from "lucide-react";

export const metadata = {
  title: "Blog - Islamic Articles & Quran Insights",
  description:
    "Read insightful articles about Quran, Islamic studies, parenting in Islam, and spiritual guidance.",
};

const blogPosts = [
  {
    id: 1,
    name: "tajweed",
    title: "The Importance of Tajweed in Quran Recitation",
    excerpt:
      "Learn why proper Tajweed is essential for beautiful and correct Quran recitation, and how it preserves the meaning of Allah's words.",
    image: "/images/importance.avif",
    category: "Quran Learning",
    date: "2025-09-15",
    readTime: "3 min read",
    author: "Sheeraz Ahmed",
    featured: true,
    tags: ["Tajweed", "Quran", "Recitation"],
  },
  // More articles will be added here later
];

const categories = [
  { name: "All Articles", count: 1 },
  { name: "Quran Learning", count: 1 },
  { name: "Parenting", count: 0 },
  { name: "Hifz", count: 0 },
  { name: "Beginner Guide", count: 0 },
  { name: "Science & Islam", count: 0 },
  { name: "Lifestyle", count: 0 },
  { name: "Technology", count: 0 },
];

const popularTags = [
  "Tajweed",
  "Quran",
  "Recitation",
  "Learning",
  "Islamic",
  "Education",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/images/1st.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative py-20 md:py-24 px-4 text-white"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Islamic Knowledge & <span className="text-green-500">Insights</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Discover articles, guides, and inspiration for your Quran learning journey.
          </p>
          
          <div className="relative max-w-xl mx-auto px-4">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 md:px-6 py-3 md:py-4 rounded-lg text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute right-6 md:right-8 top-3 md:top-4 text-gray-400" />
          </div>
        </div>

        {/* Decorative Islamic Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-900/20 to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Blog Posts - Takes 2/3 space on large screens */}
          <div className="lg:col-span-2">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Latest Articles
              </h2>
              <p className="text-gray-600">
                Read our latest insights on Quran learning and Islamic education
              </p>
            </div>

            {/* Blog Cards Grid - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative h-48 md:h-56 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    {/* Post Meta - Mobile Optimized */}
                    <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-500 mb-3 gap-2">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="flex items-center">
                        <User className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span className="truncate">{post.author}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <Link
                        href={`/blog/${post.name}`}
                        className="text-green-700 hover:text-green-800 font-semibold text-sm md:text-base flex items-center group"
                      >
                        Read Full Article
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <span className="text-xs text-gray-500 hidden md:block">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State for More Articles Coming Soon */}
            {blogPosts.length === 1 && (
              <div className="mt-8 md:mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 md:p-8 text-center">
                <div className="max-w-md mx-auto">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    More Articles Coming Soon!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We're working on more insightful articles about Quran learning, 
                    Islamic parenting, and spiritual guidance.
                  </p>
                  <div className="text-sm text-gray-500">
                    Check back regularly for updates
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Takes 1/3 space on large screens */}
          <div className="space-y-6 md:space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow p-5 md:p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-green-700" />
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 hover:text-green-700 transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {category.name}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs min-w-[2rem] text-center">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow p-5 md:p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-green-700" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    href="#"
                    className="bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-800 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 hover:scale-105"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-green-700 to-emerald-600 rounded-xl shadow p-5 md:p-6 text-white">
              <h3 className="font-bold text-lg mb-3">📩 Stay Updated</h3>
              <p className="text-green-100 mb-4 text-sm">
                Subscribe to get the latest articles and Quran learning tips
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-green-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Latest Comments */}
            <div className="bg-white rounded-xl shadow p-5 md:p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-green-700" />
                Recent Comments
              </h3>
              <div className="space-y-4">
                {[
                  { user: "Amina K.", comment: "Very helpful for my kids!", time: "2 hours ago" },
                  { user: "Omar S.", comment: "JazakAllah khair for this guide", time: "1 day ago" },
                  { user: "Fatima A.", comment: "Looking forward to more articles", time: "3 days ago" },
                ].map((item, idx) => (
                  <div key={idx} className="pb-3 border-b border-gray-100 last:border-0">
                    <p className="text-sm text-gray-700 mb-1 line-clamp-2">{item.comment}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500">by {item.user}</p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Author Spotlight - For Single Article */}
            {blogPosts.length === 1 && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow p-5 md:p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-800">✍️ Author Spotlight</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                    SA
                  </div>
                  <div>
                    <h4 className="font-bold">Sheeraz Ahmed</h4>
                    <p className="text-sm text-gray-600">Quran Teacher & Islamic Educator</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  With over 10 years of experience in teaching Quran and Tajweed, 
                  Sheeraz specializes in making Islamic education accessible to everyone.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Want to Contribute?
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8">
              We're looking for knowledgeable writers to share Islamic insights 
              and help our community grow in knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-green-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Become a Contributor
              </button>
              <button className="bg-white text-green-700 border border-green-700 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                View Writing Guidelines
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimized Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Islamic Knowledge Blog</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Your trusted source for authentic Islamic articles, Quran learning tips, 
              and spiritual guidance. Join our community of learners.
            </p>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Al Sheeraz Islamic School. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}