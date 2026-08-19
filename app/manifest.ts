import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gabriel Kadiwa — Portfolio",
    short_name: "Gabriel Kadiwa",
    description:
      "Gabriel Kadiwa's portfolio — Fullstack Developer, IT Consultant, Graphic Designer, and Tutor.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f17",
    theme_color: "#0f0f17",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
