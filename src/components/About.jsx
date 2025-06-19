import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
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
    }, 50); // Typing speed

    return () => {
      clearInterval(typingInterval.current);
      if (soundRef.current) {
        soundRef.current.pause();
        soundRef.current.currentTime = 0;
      }
    };
  }, []);

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
      // Reset typing on scroll out
      setTypedLines([]);
      setLineIndex(0);
      setIsTyping(false);
    }
  }, [inView]);

  const handleTypingDone = () => {
    setTypedLines(prev => [...prev, lines[lineIndex]]);
    setLineIndex(prev => prev + 1);
    setIsTyping(false);
  };

  return (
    <section id="about" ref={ref}>
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
