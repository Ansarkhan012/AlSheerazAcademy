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
  Share2,
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
    date: "2024-01-15",
    readTime: "5 min read",
    author: "Shaykh Ahmed Ali",
    featured: true,
    tags: ["Tajweed", "Quran", "Recitation"],
  },
//   {
//     id: 2,
//     title: "How to Make Quran Learning Fun for Kids",
//     excerpt:
//       "Discover creative methods and activities to engage children in Quran learning while maintaining their interest and enthusiasm.",
//     image: "/images/blog/kids-quran.jpg",
//     category: "Parenting",
//     date: "2024-01-12",
//     readTime: "4 min read",
//     author: "Ustadha Fatima Khan",
//     featured: true,
//     tags: ["Kids", "Parenting", "Education"],
//   },
//   {
//     id: 3,
//     title: "Benefits of Memorizing the Quran (Hifz)",
//     excerpt:
//       "Exploring the spiritual, mental, and worldly benefits of memorizing the Holy Quran and how it transforms lives.",
//     image: "/images/blog/hifz-benefits.jpg",
//     category: "Hifz",
//     date: "2024-01-10",
//     readTime: "6 min read",
//     author: "Dr. Muhammad Hassan",
//     featured: false,
//     tags: ["Hifz", "Memorization", "Spirituality"],
//   },
//   {
//     id: 4,
//     title: "5 Steps to Start Learning Quran as an Adult",
//     excerpt:
//       "It's never too late to begin your Quran journey. Here's a practical guide for adult beginners starting their Quranic education.",
//     image: "/images/blog/adult-learning.jpg",
//     category: "Beginner Guide",
//     date: "2024-01-08",
//     readTime: "5 min read",
//     author: "Ustad Abdul Rahman",
//     featured: false,
//     tags: ["Beginner", "Adult", "Learning"],
//   },
//   {
//     id: 5,
//     title: "The Science Behind Quranic Healing",
//     excerpt:
//       "Understanding how recitation and listening to Quran can provide psychological and physical healing benefits.",
//     image: "/images/blog/quran-healing.jpg",
//     category: "Science & Islam",
//     date: "2024-01-05",
//     readTime: "7 min read",
//     author: "Prof. Sarah Ahmed",
//     featured: false,
//     tags: ["Healing", "Science", "Health"],
//   },
//   {
//     id: 6,
//     title: "Building a Daily Quran Routine",
//     excerpt:
//       "Practical tips on establishing and maintaining a consistent daily Quran reading and learning routine.",
//     image: "/images/blog/daily-routine.jpg",
//     category: "Lifestyle",
//     date: "2024-01-03",
//     readTime: "4 min read",
//     author: "Imam Yusuf Abdullah",
//     featured: false,
//     tags: ["Routine", "Daily", "Consistency"],
//   },
//   {
//     id: 7,
//     title: "Choosing the Right Quran Teacher for Your Child",
//     excerpt:
//       "A comprehensive guide for parents on selecting qualified and compatible Quran teachers for their children.",
//     image: "/images/blog/choose-teacher.jpg",
//     category: "Parenting",
//     date: "2024-01-01",
//     readTime: "6 min read",
//     author: "Ustadha Aisha Malik",
//     featured: false,
//     tags: ["Teaching", "Kids", "Guidance"],
//   },
//   {
//     id: 8,
//     title: "Digital Tools for Quran Learning in 2024",
//     excerpt:
//       "Review of the best apps and online resources to enhance your Quran learning experience in the digital age.",
//     image: "/images/blog/digital-tools.jpg",
//     category: "Technology",
//     date: "2023-12-28",
//     readTime: "8 min read",
//     author: "Tech & Islam Team",
//     featured: false,
//     tags: ["Technology", "Apps", "Tools"],
//   },
];

const categories = [
  { name: "All Articles", count: 24 },
  { name: "Quran Learning", count: 8 },
  { name: "Parenting", count: 5 },
  { name: "Hifz", count: 4 },
  { name: "Beginner Guide", count: 3 },
  { name: "Science & Islam", count: 2 },
  { name: "Lifestyle", count: 6 },
  { name: "Technology", count: 3 },
];

const popularTags = [
  "Tajweed",
  "Kids",
  "Memorization",
  "Beginner",
  "Parenting",
  "Technology",
  "Spirituality",
  "Health",
  "Education",
  "Daily",
];

const featuredPosts = blogPosts.filter((post) => post.featured);

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
        className="relative py-24 px-4 text-white"
      >
        {/* Gradient Overlay */}
        <div className="absolute  inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Islamic Knowledge &  <span className="text-green-500">Insights</span>
            </h1>
            
          </div>
          <p className="text-sm md:text-md text-gray-200 mb-8">
            Discover articles, guides, and inspiration for your Quran learning journeygrity.
          </p>
           <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-100 border border-amber-50 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-4 top-4 text-gray-100" />
              </div>
        </div>

        {/* Decorative Islamic Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-900/20 to-transparent"></div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Articles</h2>
          <Link
            href="#"
            className="text-green-700 hover:text-green-800 font-semibold flex items-center"
          >
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                  <Clock className="w-4 h-4 ml-4 mr-1" />
                  {post.readTime}
                  <User className="w-4 h-4 ml-4 mr-1" />
                  {post.author}
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.name}`}
                    className="text-green-700 hover:text-green-800 font-semibold flex items-center"
                  >
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                        <span className="mx-2">•</span>
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-700 text-sm font-medium">
                          {post.category}
                        </span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-green-700 hover:text-green-800 text-sm font-semibold"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
            </div>

            {/* Pagination */}
            {/* <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-50">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className={`px-4 py-2 rounded-lg ${
                    num === 1
                      ? "bg-green-700 text-white"
                      : "border hover:bg-gray-50"
                  }`}
                >
                  {num}
                </button>
              ))}
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-50">
                Next
              </button>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-green-700" />
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href="#"
                      className="flex items-center justify-between py-2 hover:text-green-700"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-green-700" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    href="#"
                    className="bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-800 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-green-700 to-emerald-600 rounded-xl shadow p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Stay Updated</h3>
              <p className="text-green-100 mb-4">
                Subscribe to get the latest articles and Quran learning tips
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-green-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Latest Comments */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-green-700" />
                Latest Comments
              </h3>
              <div className="space-y-4">
                {[
                  { user: "Amina K.", comment: "Very helpful for my kids!" },
                  { user: "Omar S.", comment: "JazakAllah khair for this guide" },
                  { user: "Fatima A.", comment: "Looking forward to more articles" },
                ].map((item, idx) => (
                  <div key={idx} className="pb-3 border-b last:border-0">
                    <p className="text-sm text-gray-700 mb-1">{item.comment}</p>
                    <p className="text-xs text-gray-500">by {item.user}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <BookOpen className="w-16 h-16 text-green-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Want to Write for Our Blog?
            </h2>
            <p className="text-gray-600 mb-8">
              We're always looking for knowledgeable writers to contribute
              Islamic content that benefits our community.
            </p>
            <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              Become a Contributor
            </button>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">Share this blog:</span>
            <div className="flex gap-3">
              {["Facebook", "Twitter", "WhatsApp", "Email"].map((platform) => (
                <button
                  key={platform}
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}