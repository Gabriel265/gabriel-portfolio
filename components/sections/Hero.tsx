"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import PixelPanel from "@/components/ui/PixelPanel";
import PixelButton from "@/components/ui/PixelButton";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-4xl px-4 pt-16 pb-20 sm:pt-24">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
          <PixelPanel className="flex flex-col items-center text-center pixel-corners">
            <div className="pixel-border-sm mb-4 overflow-hidden rounded-full">
              <Image
                src="/images/hero-photo.jpg"
                alt="Gabriel Kadiwa"
                width={112}
                height={112}
                priority
                className="h-28 w-28 object-cover"
              />
            </div>
            <h1 className="font-pixel text-lg sm:text-2xl text-accent mb-3">GABRIEL KADIWA</h1>
            <p className="font-pixel text-[0.6rem] sm:text-xs text-fg/80 leading-relaxed">
              FULLSTACK DEVELOPER · IT CONSULTANT
            </p>
            <p className="font-pixel text-[0.6rem] sm:text-xs text-fg/80 leading-relaxed mb-4">
              GRAPHIC DESIGNER · TUTOR
            </p>
            <div className="flex gap-4 mb-6 text-xl text-fg">
              <a href="https://github.com/Gabriel265" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/gabriel-kadiwa-b2832b1b7"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:gabrielkadiwa@gmail.com" aria-label="Email" className="hover:text-accent">
                <FaEnvelope />
              </a>
            </div>
          </PixelPanel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          <PixelButton href="#projects">📁 PROJECTS</PixelButton>
          <PixelButton
            href="https://docs.google.com/document/d/1pVxDhrEAudEdzhPvdz46XDjNOBV3kodTOBXfX44cf68/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
          >
            📜 RESUME
          </PixelButton>
          <PixelButton href="#contact" variant="ghost">
            📬 CONTACT
          </PixelButton>
          <PixelButton href="https://gabrielthedesigner.netlify.app" target="_blank" rel="noreferrer" variant="ghost">
            🎨 DESIGNING
          </PixelButton>
          <PixelButton href="https://kaycee-tutoring.vercel.app" target="_blank" rel="noreferrer" variant="ghost">
            💻 TUTORING
          </PixelButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
