import Link from 'next/link';

async function getSurahDetail(id: string) {
  const res = await fetch(
    `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,ur.jalandhry,ar.alafasy,en.sahih`
  );
  if (!res.ok) throw new Error('Failed to fetch Surah details');
  return res.json();
}

// Next.js 15 ke liye params ko Promise handle kiya gaya hai
export default async function SurahReadingPage({ params }: { params: Promise<{ surahId: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.surahId;
  
  const data = await getSurahDetail(id);
  
  const arabic = data.data[0];   // Arabic
  const urdu = data.data[1];     // Urdu
  const audio = data.data[2];    // Audio
  const english = data.data[3];  // Corrected Index (Pehle yahan 4 tha)

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className=" bg-white/80 backdrop-blur-md border-b z-50 p-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/quran" className="text-emerald-600 hover:text-emerald-700 font-medium">
            ← Back to List
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800">{arabic.englishName}</h1>
            <p className="text-sm text-slate-500">{arabic.revelationType} • {arabic.numberOfAyahs} Ayats</p>
          </div>
          <div className="text-2xl font-arabic text-emerald-700">{arabic.name}</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-8">
        {id !== "1" && (
          <div className="text-center text-3xl font-arabic mb-12 text-slate-700">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </div>
        )}

        <div className="space-y-8">
          {arabic.ayahs.map((ayah: any, index: number) => (
            <div 
              key={ayah.number} 
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-200 transition-all"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                  {index + 1}
                </span>
                <audio controls className="h-8 w-48 opacity-60">
                  <source src={audio.ayahs[index].audio} type="audio/mpeg" />
                </audio>
              </div>

              {/* Arabic */}
              <p className="text-right text-4xl mb-6 leading-[4rem] font-arabic text-slate-800" dir="rtl">
                {index === 0 && id !== "1" 
                  ? ayah.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "") 
                  : ayah.text}
              </p>


              {/* Urdu Translation */}
              <p className="text-left text-lg text-slate-600 font-normal leading-relaxed border-t pt-4 border-slate-50" dir="ltr">
                
                {english.ayahs[index].text}
              </p>


              <p className="text-right text-xl text-emerald-700 font-medium mb-4 leading-relaxed border-t pt-4 border-slate-50" dir="rtl">
                
                {urdu.ayahs[index].text}
              </p>

     
              
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}