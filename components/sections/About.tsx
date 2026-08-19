"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import PixelPanel from "@/components/ui/PixelPanel";
import { useSound } from "@/components/providers/SoundProvider";

const BIO =
  "💡Innovative and results-driven Computer Science professional.💻 Experienced in software development, system administration, and IT support.📈 Specializes in building scalable systems aligned with business goals.⚙️ Adept at leveraging modern technologies to drive digital transformation.";

const TYPE_SPEED_MS = 50;

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const { canPlay } = useSound();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // This effect syncs local typing state to the external IntersectionObserver
    // (`inView`) state from react-intersection-observer, so a direct setState
    // here is the intended pattern, not a render-derivable value.
    if (!inView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setText("");
      setTyping(false);
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
      return;
    }

    setTyping(true);
    if (canPlay()) {
      audioRef.current?.play().catch(() => {});
    }

    let i = 0;
    const interval = window.setInterval(() => {
      i += 1;
      setText(BIO.slice(0, i));
      if (i >= BIO.length) {
        window.clearInterval(interval);
        setTyping(false);
        audioRef.current?.pause();
        if (audioRef.current) audioRef.current.currentTime = 0;
      }
    }, TYPE_SPEED_MS);

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section id="about" ref={ref} className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="font-pixel text-accent text-base sm:text-xl mb-6 text-center">ABOUT ME</h2>
      <PixelPanel className="pixel-corners">
        <p className="font-sans text-sm sm:text-base leading-relaxed min-h-[6rem]">
          {text}
          {typing && <span className="animate-pulse">▍</span>}
        </p>
      </PixelPanel>
      <audio ref={audioRef} src="/sounds/typing.mp3" loop preload="auto" />
    </section>
  );
}
