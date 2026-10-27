import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Anshul Singhal — Oral & Maxillofacial Surgeon",
    short_name: "Dr. A. Singhal",
    description: "Specialist surgical care for the face, mouth, and jaws.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F4",
    theme_color: "#0F5C63",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
