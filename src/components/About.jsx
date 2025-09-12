import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async"; // Import Helmet
import typingSound from "../assets/sounds/typing.mp3";

const lines = [
  "💡Innovative and results-driven Computer Science professional.💻 Experienced in software development, system administration, and IT support.📈 Specializes in building scalable systems aligned with business goals.⚙️ Adept at leveraging modern technologies to drive digital transformation."
];

const TypingEffect = ({ text, onDone, soundRef }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const typingInterval = useRef(null);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.loop = true;
      soundRef.current.play().catch(() => {});
    }

    typingInterval.current = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(prev => prev + text[indexRef.current]);
        indexRef.current += 1;
      } else {
        clearInterval(typingInterval.current);
        if (soundRef.current) {
          soundRef.current.pause();
          soundRef.current.currentTime = 0;
        }
        onDone();
      }
    }, 50);

    return () => {
      clearInterval(typingInterval.current);
      if (soundRef.current) {
        soundRef.current.pause();
        soundRef.current.currentTime = 0;
      }
    };
  }, [text, onDone, soundRef]);

  return <p>{displayedText}</p>;
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [lineIndex, setLineIndex] = useState(0);
  const [typedLines, setTypedLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (inView && !isTyping && lineIndex < lines.length) {
      setIsTyping(true);
    } else if (!inView) {
      setTypedLines([]);
      setLineIndex(0);
      setIsTyping(false);
    }
  }, [inView, isTyping, lineIndex]);

  const handleTypingDone = () => {
    setTypedLines(prev => [...prev, lines[lineIndex]]);
    setLineIndex(prev => prev + 1);
    setIsTyping(false);
  };

  return (
    <section id="about" ref={ref}>
      <Helmet>
        <title>About Gabriel Kadiwa - Software Developer & IT Specialist</title>
        <meta
          name="description"
          content="Gabriel Kadiwa is a skilled software developer, IT support specialist, graphic designer, and tutor. Explore expertise in building scalable systems, providing IT solutions, and delivering creative design services."
        />
        <meta
          name="keywords"
          content="software development, IT support, graphic designing, tutoring, web development, system administration, digital transformation"
        />
        <meta property="og:title" content="About Gabriel Kadiwa - Software & IT Expert" />
        <meta
          property="og:description"
          content="Discover Gabriel Kadiwa's professional services in software development, IT support, graphic design, and tutoring. Contact for innovative and scalable solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielkadiwa.vercel.app/about" />
        <meta property="og:image" content="https://gabrielkadiwa.vercel.app/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Gabriel Kadiwa - Software & IT Expert" />
        <meta
          name="twitter:description"
          content="Gabriel Kadiwa offers expert services in software development, IT support, graphic design, and tutoring. Learn more about scalable solutions and creative expertise."
        />
        <meta name="twitter:image" content="https://gabrielkadiwa.vercel.app/images/og-image.jpg" />
      </Helmet>
      <h2>About Me</h2>
      <audio ref={audioRef} src={typingSound} preload="auto" />
      <div style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
        {typedLines.map((line, i) => (
          <p key={`typed-${i}`}>{line}</p>
        ))}
        {inView && isTyping && lineIndex < lines.length && (
          <TypingEffect
            key={`line-${lineIndex}`}
            text={lines[lineIndex]}
            onDone={handleTypingDone}
            soundRef={audioRef}
          />
        )}
      </div>
    </section>
  );
};

export default About;