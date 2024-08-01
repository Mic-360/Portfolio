import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bhaumic Singh - Full-Stack Developer",
    short_name: "Bhaumic",
    description: "Bhaumic Singh is a passionate Full-Stack Web and Android Developer with a knack for creating efficient and scalable applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/android-chrome-256x256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    screenshots: [
      {
        src: "/screenshot.png",
        sizes: "640x480",
        type: "image/png",
      },
    ],
    related_applications: [
      {
        platform: "web",
        url: "https://bhaumic.me",
      },
    ],
    categories: ["portfolio", "developer", "web", "android"],
    lang: "en-US",
    dir: "ltr",
  };
}