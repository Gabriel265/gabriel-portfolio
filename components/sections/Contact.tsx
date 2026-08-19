"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/constants";
import PixelPanel from "@/components/ui/PixelPanel";
import PixelButton from "@/components/ui/PixelButton";
import Toast from "@/components/ui/Toast";

const inputClasses =
  "w-full pixel-border-sm bg-bg text-fg font-sans text-sm px-3 py-3 mb-4 placeholder:text-fg/50";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; tone: "success" | "error" } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setToast({ message: "Message sent successfully!", tone: "success" });
        form.current?.reset();
      })
      .catch(() => {
        setToast({ message: "Failed to send message. Please try again later.", tone: "error" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="font-pixel text-accent text-base sm:text-xl mb-8 text-center">SAVE POINT</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form ref={form} onSubmit={sendEmail} className="pixel-border pixel-corners bg-elevated text-fg p-4 sm:p-6">
          <input name="name" placeholder="Your Name" required className={inputClasses} />
          <input name="email" type="email" placeholder="Your Email" required className={inputClasses} />
          <textarea name="message" placeholder="Message..." required className={`${inputClasses} min-h-[150px] resize-y`} />
          <PixelButton type="submit" disabled={loading} className="w-full justify-center">
            {loading ? "SAVING..." : "SEND MESSAGE"}
          </PixelButton>
        </form>

        <PixelPanel className="pixel-corners">
          <h3 className="font-pixel text-xs text-accent mb-4">GET IN TOUCH</h3>
          <p className="font-sans text-sm mb-3">
            <strong>Email:</strong>{" "}
            <a href="mailto:gabrielkadiwa@gmail.com" className="text-accent2 hover:underline">
              gabrielkadiwa@gmail.com
            </a>
          </p>
          <p className="font-sans text-sm mb-3">
            <strong>Phone:</strong>{" "}
            <a href="tel:+265887171231" className="text-accent2 hover:underline">
              +265 88 717 1231
            </a>
            ,{" "}
            <a href="tel:+265995375405" className="text-accent2 hover:underline">
              +265 99 537 5405
            </a>
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="https://twitter.com/justGabriel265" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
              <FaTwitter /> Twitter
            </a>
            <a href="https://instagram.com/justGabrielmw" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
              <FaInstagram /> Instagram
            </a>
            <a href="https://facebook.com/profile.php?id=100069183130767" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-kadiwa-b2832b1b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </PixelPanel>
      </div>

      {toast && <Toast message={toast.message} tone={toast.tone} onDismiss={() => setToast(null)} />}
    </section>
  );
}
