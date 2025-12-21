// import Image from "next/image";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Courses from "@/components/Course";
import Free from "@/components/Free";
import Guid from "@/components/Guid";
import Hero from "@/components/Hero";
import Pricing from "@/components/pricing";
import Step from "@/components/Step";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
    <>
    <Hero />
    <Step />
    <Free />
    <WhyChoose />
    <About />

    <Pricing />
    <Courses />
    <Guid />
    <Contact />
    </>
  );
}
