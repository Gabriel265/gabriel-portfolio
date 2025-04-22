import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import typingSound from "../assets/sounds/typing.mp3";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [startTyping, setStartTyping] = useState(false);
  const [typedOnce, setTypedOnce] = useState(false);
  const audioRef = useRef(null);

  const lines = [
    "💻 Innovative and results-driven Computer Science professional.",
    "💻 Experienced in software development, system administration, and IT support.",
    "📈 Specializes in building scalable systems aligned with business goals.",
    "⚙️ Adept at leveraging modern technologies to drive digital transformation."
  ];

  useEffect(() => {
    if (inView && !typedOnce) {
      setStartTyping(true);
    }
    if (!inView) {
      setStartTyping(false);
      setTypedOnce(false);
    }
  }, [inView]);

  useEffect(() => {
    if (startTyping && audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {});
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [startTyping]);

  return (
    <section id="about" ref={ref}>
      <h2>About Me</h2>
      <audio ref={audioRef} src={typingSound} preload="auto" />
      <div style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
        {startTyping && !typedOnce ? (
          <Typewriter
            onInit={(typewriter) => {
              lines.forEach((line, i) => {
                typewriter
                  .typeString(line)
                  .pauseFor(800);
                if (i !== lines.length - 1) {
                  typewriter.typeString("<br/><br/>");
                }
              });
              typewriter.callFunction(() => {
                setTypedOnce(true);
              }).start();
            }}
            options={{
              delay: 50, // smooth and readable
              skipAddStyles: true
            }}
          />
        ) : (
          lines.map((line, i) => <p key={i} dangerouslySetInnerHTML={{ __html: line }} />)
        )}
      </div>
    </section>
  );
};

export default About;
