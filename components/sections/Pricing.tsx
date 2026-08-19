"use client";

import { motion } from "framer-motion";
import PixelButton from "@/components/ui/PixelButton";

const PRICING_URL = "https://www.websitesandsystems.com/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-pixel text-accent text-base sm:text-xl mb-2 text-center">SHOP</h2>
        <p className="font-sans text-sm text-fg/70 text-center mb-8">
          Live pricing, straight from Websites &amp; Systems Co.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4"
      >
        <iframe
          src={PRICING_URL}
          title="Websites and Systems Co — Pricing"
          loading="lazy"
          className="block w-full border-0"
          style={{ height: "85vh", minHeight: "600px" }}
        />

        <div className="mt-6 flex justify-center">
          <PixelButton href={PRICING_URL} target="_blank" rel="noreferrer">
            🌐 VIEW FULL PRICING ON WEBSITES &amp; SYSTEMS CO
          </PixelButton>
        </div>
      </motion.div>
    </section>
  );
}
