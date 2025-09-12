import { Helmet, HelmetProvider } from "react-helmet-async"; // Import Helmet
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Gabriel Kadiwa - Software Development & IT Solutions</title>
        <meta
          name="description"
          content="Gabriel Kadiwa offers professional software development, IT support, graphic designing, and tutoring services. Build scalable systems and creative solutions with expertise."
        />
        <meta
          name="keywords"
          content="software development, IT support, graphic design, tutoring, web development, system administration, Gabriel Kadiwa"
        />
        <meta property="og:title" content="Gabriel Kadiwa - Software & IT Specialist" />
        <meta
          property="og:description"
          content="Explore Gabriel Kadiwa's portfolio for expert software development, IT support, graphic design, and tutoring services. Contact for tailored solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielkadiwa.vercel.app" />
        <meta property="og:image" content="https://gabrielkadiwa.vercel.app/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gabriel Kadiwa - Software & IT Specialist" />
        <meta
          name="twitter:description"
          content="Gabriel Kadiwa provides expert software development, IT support, graphic design, and tutoring services. Discover innovative solutions for your needs."
        />
        <meta name="twitter:image" content="https://gabrielkadiwa.vercel.app/images/og-image.jpg" />
      </Helmet>
      <Analytics />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Pricing />
      <Contact />
      <FloatingButtons />
      <Footer />
    </HelmetProvider>
  );
}

export default App;