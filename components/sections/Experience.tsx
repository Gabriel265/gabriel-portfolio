"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaInfoCircle, FaTimes } from "react-icons/fa";
import { experienceEntries } from "@/lib/data/experience";
import PixelPanel from "@/components/ui/PixelPanel";
import PixelBadge from "@/components/ui/PixelBadge";
import PixelButton from "@/components/ui/PixelButton";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="font-pixel text-accent text-base sm:text-xl mb-10 text-center">WORLD MAP</h2>

      <div ref={containerRef} className="relative">
        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 sm:-translate-x-1/2 bg-elevated">
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1 }}
            className="w-full bg-accent origin-top"
          />
        </div>

        <div className="flex flex-col gap-10">
          {experienceEntries.map((entry, index) => {
            const isRight = index % 2 === 1;
            return (
              <motion.div
                key={entry.title + entry.company}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative pl-12 sm:pl-0 sm:w-1/2 ${isRight ? "sm:ml-auto sm:pl-10" : "sm:pr-10 sm:text-right"}`}
              >
                <span className="absolute left-[14px] sm:left-auto sm:right-auto top-1 h-3 w-3 rounded-full bg-accent pixel-border-sm sm:static sm:hidden" />
                <PixelPanel className="pixel-corners">
                  <div className={`flex items-center gap-3 mb-2 ${isRight ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    <div className="flex -space-x-2 shrink-0">
                      <Image
                        src={entry.icon}
                        alt={entry.company}
                        width={36}
                        height={36}
                        className="rounded-full ring-2 ring-bg"
                      />
                      {entry.icon2 && (
                        <Image
                          src={entry.icon2}
                          alt={entry.company}
                          width={36}
                          height={36}
                          className="rounded-full ring-2 ring-bg"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-pixel text-[0.6rem] text-accent">{entry.title}</h3>
                      <p className="font-sans text-xs text-fg/70">{entry.company}</p>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-fg/60 mb-2">{entry.period}</p>
                  <p className="font-sans text-sm mb-3">{entry.summary}</p>
                  <div className={`flex flex-wrap gap-2 mb-3 ${isRight ? "" : "sm:justify-end"}`}>
                    {entry.tech.map((tech) => (
                      <PixelBadge key={tech}>{tech}</PixelBadge>
                    ))}
                  </div>
                  <PixelButton variant="ghost" onClick={() => setOpenIndex(index)}>
                    <FaInfoCircle /> MISSION BRIEF
                  </PixelButton>
                </PixelPanel>
              </motion.div>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={experienceEntries[openIndex].title}
            onClick={(e) => e.stopPropagation()}
            className="pixel-border w-full max-w-lg max-h-[80vh] overflow-y-auto bg-elevated p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-pixel text-xs text-accent">{experienceEntries[openIndex].company}</h3>
              <button onClick={() => setOpenIndex(null)} aria-label="Close" className="text-fg hover:text-accent">
                <FaTimes />
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {experienceEntries[openIndex].detail.map((line) => (
                <li key={line} className="font-sans text-sm leading-relaxed relative pl-4">
                  <span className="absolute left-0 text-accent">▸</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
