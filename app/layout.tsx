import { Footer, Header } from "@/components/Outlet";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://bhaumic.me/"),
  title: {
    default: "Bhaumic Singh",
    template: "%s | Bhaumic Singh",
  },
  description: "Curious Web and Android Developer.",
  openGraph: {
    title: "Bhaumic Singh",
    description: "Curious Web and Android Developer.",
    url: "https://bhaumic.me",
    siteName: "Bhaumic Singh",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://media.licdn.com/dms/image/C4D22AQFJi7tziSD-Ew/feedshare-shrink_1280/0/1673895349913?e=1721865600&v=beta&t=ut0BZV8L51nAr6tnkDzHTPrWR5Kk77zgQUykrl6KQ0k",
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
