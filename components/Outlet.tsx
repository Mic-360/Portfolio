"use client";

import Link from "next/link";
import { Icons } from "@/lib/icons";
import { FooterButtons } from "@/lib/constants";
import { PopupButton } from "@typeform/embed-react";

const Header = () => {
  return (
    <nav className="py-4 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-medium">Bhaumik Singh</h1>
        <ul className="flex items-center space-x-4 sm:space-x-6">
          <li>
            <Link
              href="#articles"
              className="py-2 px-4 text-sm sm:text-base border rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Mic-360"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
            >
              <Icons.github className="h-6 w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="font-mono space-y-6 text-center lg:text-left">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-semibold">
              Bhaumik
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="font-sans text-shade text-lg sm:text-xl mb-4 sm:mb-0">
                Full-stack
                <br />
                developer
              </p>
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-semibold">
                Singh
              </h2>
            </div>
          </div>
          <div className="text-center lg:text-right space-y-8">
            <h2 className="text-xl font-medium font-mono">.../Contacts...</h2>
            <ul className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm sm:text-base">
              <li>
                <PopupButton
                  id="woGMwFuB"
                  className="text-shade hover:text-accent hover:underline underline-offset-2"
                >
                  Connect
                </PopupButton>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-shade hover:text-accent hover:underline underline-offset-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#project"
                  className="text-shade hover:text-accent hover:underline underline-offset-2"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Mic-360/portfolio"
                  className="text-shade hover:text-accent hover:underline underline-offset-2"
                >
                  Source
                </Link>
              </li>
            </ul>
            <div className="inline-block">
              <div className="border border-accent rounded-3xl p-4 space-y-2 text-shade font-mono">
                <p className="text-xl mb-2">2024 - 2025</p>
                <p className="text-sm">Handcrafted by bhaumic /</p>
                <p className="text-sm">Designed by Taisia /</p>
                <p className="text-sm">Powered by NextJs & Vercel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {FooterButtons.map((button, idx) => (
            <Link
              key={idx}
              href={button.link}
              className="flex items-center justify-center px-4 py-2 gap-x-2 rounded-full border border-accent text-shade font-sans font-semibold hover:bg-accent hover:text-foreground transition-all duration-300 ease-in-out text-sm sm:text-base"
            >
              {button.icon}
              <span className="hidden sm:inline">{button.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { Header, Footer };
