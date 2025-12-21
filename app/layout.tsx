
import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      
  <title>Online Quran Academy - Learn Quran & Islamic Studies</title>
  <meta 
    name="description" 
    content="Join our Online Quran Academy for live Quran classes, Tajweed, and Islamic studies with experienced teachers. Learn from home anywhere in the world." 
  />
  <meta name="keywords" content="Quran classes, Online Quran, Tajweed, Islamic studies, Quran academy, Learn Quran online" />
  <meta name="author" content="Al Sheeraz Islamic Academy" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
  
  <meta property="og:title" content="Online Quran Academy - Live Quran Classes" />
  <meta property="og:description" content="Join our Online Quran Academy for live Quran classes, Tajweed, and Islamic studies with experienced teachers." />
  <meta property="og:image" content="/1st.jpg" />
  <meta property="og:url" content="http://localhost:3000" />
  <meta property="og:type" content="website" />
      </head>
      <body>
        <header className="sticky -top-10 z-50">
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>

    </html>
  );
}
