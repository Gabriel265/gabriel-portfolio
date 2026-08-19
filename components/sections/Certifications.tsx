import { FaGoogleDrive } from "react-icons/fa";
import { certifications } from "@/lib/data/certifications";
import PixelPanel from "@/components/ui/PixelPanel";
import CertThumb from "@/components/sections/CertThumb";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="font-pixel text-accent text-base sm:text-xl mb-8 text-center">🎓 TROPHY ROOM</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <PixelPanel key={cert.title} className="pixel-corners flex flex-col hover:-translate-y-1 transition-transform">
            <div className="pixel-border-sm mb-3 overflow-hidden bg-bg">
              {/* External Google Drive thumbnails: plain <img>, next/image is unreliable with Drive's redirect/anti-hotlink behavior */}
              <CertThumb src={cert.preview} alt={`Preview for ${cert.title}`} />
            </div>
            <h3 className="font-pixel text-[0.6rem] text-accent mb-2">{cert.title}</h3>
            <p className="font-sans text-xs text-fg/80 mb-1">
              <strong>Issuer:</strong>{" "}
              <a href={cert.issuerUrl} target="_blank" rel="noreferrer" className="text-accent2 hover:underline">
                {cert.issuer}
              </a>
            </p>
            <p className="font-sans text-xs text-fg/80 mb-1">
              <strong>Issue Date:</strong> {cert.date}
            </p>
            {cert.skills && (
              <p className="font-sans text-xs text-fg/80 mb-3">
                <strong>Skills:</strong> {cert.skills}
              </p>
            )}
            <a
              href={cert.viewUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center gap-1 font-sans text-xs text-accent hover:underline"
            >
              <FaGoogleDrive /> View Certificate
            </a>
          </PixelPanel>
        ))}
      </div>
    </section>
  );
}
