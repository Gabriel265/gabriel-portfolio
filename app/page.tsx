import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import FloatingButtons from "@/components/sections/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Pricing />
      <Contact />
      <FloatingButtons />
    </main>
  );
}
