import { Footer, Header } from "@/components/Outlet";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Fira_Code, Open_Sans } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#292828",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bhaumic.me/"),
  title: {
    default: "Bhaumic Singh - Full-Stack Developer",
    template: "%s | Bhaumic Singh - Full-Stack Developer",
  },
  description:
    "Bhaumic Singh is a passionate Full-Stack Web and Android Developer with a knack for creating efficient and scalable applications.",
  openGraph: {
    title: "Bhaumic Singh - Full-Stack Developer",
    description:
      "Bhaumic Singh is a passionate Full-Stack Web and Android Developer with a knack for creating efficient and scalable applications.",
    url: "https://bhaumic.me",
    siteName: "Bhaumic Singh",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://media.licdn.com/dms/image/C4D22AQFJi7tziSD-Ew/feedshare-shrink_1280/0/1673895349913?e=1725494400&v=beta&t=ceDkM53p23MYaglo44uuOddu9nM_6LNHON9J5xYWfQg",
        width: 1200,
        height: 630,
        alt: "Bhaumic Singh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bhaumicsingh",
    creator: "@bhaumicsingh",
    title: "Bhaumic Singh - Full-Stack Developer",
    description:
      "Bhaumic Singh is a passionate Full-Stack Web and Android Developer with a knack for creating efficient and scalable applications.",
    images: [
      {
        url: "https://media.licdn.com/dms/image/C4D22AQFJi7tziSD-Ew/feedshare-shrink_1280/0/1673895349913?e=1725494400&v=beta&t=ceDkM53p23MYaglo44uuOddu9nM_6LNHON9J5xYWfQg",
        width: 1200,
        height: 630,
        alt: "Bhaumic Singh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bhaumic.me",
    languages: {
      "en-US": "https://bhaumic.me/en-US",
      "es-ES": "https://bhaumic.me/es-ES",
    },
  },
  other: {
    "msapplication-TileColor": "#292828",
    "msapplication-TileImage": "/icons/mstile-150x150.png",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#292828",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} ${openSans.variable}`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
