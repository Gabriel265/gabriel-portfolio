import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const About = () => {
  const audioRef = useRef(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasPlayed.current) {
            hasPlayed.current = true;
            if (audioRef.current) {
              audioRef.current.volume = 0.3;
              audioRef.current.play().catch(err => {
                console.warn("Audio play failed:", err);
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
        <Typewriter
          words={[
            "I'm Gabriel Kadiwa, a curious software engineer.",
            "I love building powerful, user-centric applications.",
            "From Python to React — I bring ideas to life with code."
          ]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </p>

      {/* 🔊 Invisible audio player */}
      <audio
        ref={audioRef}
        src="/sounds/typing.mp3"
        preload="auto"
      />
    </motion.section>
  );
};

export default About;
