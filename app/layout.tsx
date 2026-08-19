import type { Metadata, Viewport } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SoundProvider } from "@/components/providers/SoundProvider";
import Hud from "@/components/layout/Hud";
import TitleScreen from "@/components/layout/TitleScreen";
import Footer from "@/components/layout/Footer";
import FluidBackground from "@/components/ui/FluidBackground";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f17" },
    { media: "(prefers-color-scheme: light)", color: "#fffbeb" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gabriel Kadiwa - Software Development & IT Solutions",
    template: "%s | Gabriel Kadiwa",
  },
  description:
    "Gabriel Kadiwa offers professional software development, IT support, graphic designing, and tutoring services. Build scalable systems and creative solutions with expertise.",
  keywords: [
    "software development",
    "IT support",
    "graphic design",
    "tutoring",
    "web development",
    "system administration",
    "Gabriel Kadiwa",
  ],
  authors: [{ name: "Gabriel Kadiwa", url: SITE_URL }],
  creator: "Gabriel Kadiwa",
  publisher: "Gabriel Kadiwa",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Gabriel Kadiwa - Software & IT Specialist",
    description:
      "Explore Gabriel Kadiwa's portfolio for expert software development, IT support, graphic design, and tutoring services. Contact for tailored solutions.",
    type: "website",
    url: SITE_URL,
    siteName: "Gabriel Kadiwa — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Kadiwa - Software & IT Specialist",
    description:
      "Gabriel Kadiwa provides expert software development, IT support, graphic design, and tutoring services. Discover innovative solutions for your needs.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Kadiwa",
  url: SITE_URL,
  jobTitle: ["Fullstack Developer", "IT Consultant", "Graphic Designer", "Tutor"],
  email: "mailto:gabrielkadiwa@gmail.com",
  sameAs: [
    "https://github.com/Gabriel265",
    "https://www.linkedin.com/in/gabriel-kadiwa-b2832b1b7",
    "https://twitter.com/justGabriel265",
    "https://instagram.com/justGabrielmw",
    "https://facebook.com/profile.php?id=100069183130767",
  ],
  knowsAbout: [
    "React",
    "Django",
    "Flutter",
    "Python",
    "JavaScript",
    "Cloud & IT Support",
    "Graphic Design",
    "Software Tutoring",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="night" className={`${pressStart2P.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans">
        <FluidBackground />
        <ThemeProvider>
          <SoundProvider>
            <TitleScreen />
            <Hud />
            {children}
            <Footer />
          </SoundProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
