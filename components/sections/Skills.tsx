"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data/skills";
import { useSound } from "@/components/providers/SoundProvider";
import PixelPanel from "@/components/ui/PixelPanel";
import PixelBadge from "@/components/ui/PixelBadge";

function SkillCard({ group, index, revealed }: { group: (typeof skillGroups)[number]; index: number; revealed: boolean }) {
  const { canPlay } = useSound();
  const audioRef = useRef<HTMLAudioElement>(null);
  const playedRef = useRef(false);
  const GroupIcon = group.icon;

  useEffect(() => {
    if (revealed && !playedRef.current) {
      playedRef.current = true;
      if (canPlay() && audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    }
    if (!revealed) playedRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealed]);

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={revealed ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <PixelPanel className="pixel-corners h-full">
        <div className="flex items-center gap-2 mb-3">
          <GroupIcon className="text-accent text-lg" />
          <h3 className="font-pixel text-[0.65rem] sm:text-xs text-accent">{group.title.toUpperCase()}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <PixelBadge key={skill.name}>
                <SkillIcon className="text-accent2" /> {skill.name}
              </PixelBadge>
            );
          })}
        </div>
      </PixelPanel>
      <audio ref={audioRef} src="/sounds/pop.mp3" preload="auto" />
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleIndex(0);
        } else {
          setVisibleIndex(null);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visibleIndex === null) return;
    if (visibleIndex >= skillGroups.length - 1) return;

    const timer = window.setTimeout(() => {
      setVisibleIndex((prev) => (prev === null ? null : prev + 1));
    }, 500);
    return () => window.clearTimeout(timer);
  }, [visibleIndex]);

  return (
    <section id="skills" ref={sectionRef} className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="font-pixel text-accent text-base sm:text-xl mb-8 text-center">SKILL TREE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.title} group={group} index={index} revealed={visibleIndex !== null && index <= visibleIndex} />
        ))}
      </div>
    </section>
  );
}
