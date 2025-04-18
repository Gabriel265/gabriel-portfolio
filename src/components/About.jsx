import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const About = () => {
  const audioRef = useRef(null);
  const sectionRef = useRef(null);
  const [typing, setTyping] = useState(false);

  const textLines = [
    "I’m an innovative and results-driven Computer Science professional.",
    "I specialize in software development, system administration, and IT support.",
    "I create scalable systems that enhance productivity.",
    "I use cutting-edge tech to solve complex challenges and drive digital transformation."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Trigger typing
            setTyping(true);
          } else {
            // Reset typing state when scrolled away
            setTyping(false);
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  useEffect(() => {
    if (typing && audioRef.current) {
      try {
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;
        audioRef.current.play();
      } catch (error) {
        console.warn("Audio play error:", error);
      }
    }
  }, [typing]);

  const handleTypingDone = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h2>About Me</h2>
      <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
        {typing && (
          <Typewriter
            words={textLines}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
            onLoopDone={handleTypingDone}
          />
        )}
        {!typing && textLines.map((line, i) => <span key={i}>{line}<br /></span>)}
      </p>

      {/* Typing sound — only plays during typing */}
      <audio
        ref={audioRef}
        src="/sounds/typing.mp3"
        preload="auto"
      />
    </motion.section>
  );
};

export default About;
