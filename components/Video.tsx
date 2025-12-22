'use client'
import { useEffect, useRef } from "react";
export default function QuranClassesSection() {


  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      },
      { threshold: 0.3 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        
       
        <h2 className="text-2xl text-center md:text-4xl font-bold mb-6">
          <span className="text-green-700">Real Glimpses</span>{" "}
          <span className="text-black">from Our Online Quran Classes</span>
        </h2>

       
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-14">
          At Al Sheeraz Islamic School - Online Quran Academy, hundreds of students are learning the Quran daily
          through one-to-one online sessions. Here we’ve shared a few selected class clips to show our
          professional teaching method and the sincerity of our students. These short glimpses reflect
          the trust, dedication, and real environment of our live Quran classes.
        </p>

        {/* Video Container */}
        <div
          className="relative bg-green-800 rounded-3xl p-8 md:p-12"
          style={{
            backgroundImage: "url('/images/pattern.png')", 
            
          }}
        >
           <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-xl bg-black">
      <div className="relative w-full aspect-video">
        <iframe
          ref={iframeRef}
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/7Q2H5U40VRg?enablejsapi=1&modestbranding=1&rel=0"
          title="Online Quran Class"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>


        </div>

      </div>
    </section>
  );
}
