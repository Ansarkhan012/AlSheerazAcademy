import Link from 'next/link';

// Data fetching function
async function getSurahs() {
  const res = await fetch('https://api.alquran.cloud/v1/surah');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function QuranListPage() {
  const data = await getSurahs();
  const surahs = data.data;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-emerald-700 mb-2">Al-Quran Al-Kareem</h1>
        <p className="text-gray-600 italic">Apni pasand ki Surah muntakhib karein</p>
      </div>

      {/* Surah Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {surahs.map((surah: any) => (
          <Link 
            key={surah.number} 
            href={`/quran/${surah.number}`}
            className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Number Design */}
            <span className="absolute -right-2 -bottom-2 text-6xl font-bold text-gray-50 group-hover:text-emerald-50 transition-colors">
              {surah.number}
            </span>

            <div className="flex justify-between items-center relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">
                  {surah.number}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{surah.englishName}</h2>
                  <p className="text-sm text-gray-500 italic">{surah.englishNameTranslation}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-2xl font-arabic text-emerald-800" dir="rtl">
                  {surah.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {surah.numberOfAyahs} Ayahs
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}