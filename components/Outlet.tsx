"use client";

import { FooterButtons } from "@/lib/constants";
import { Icons } from "@/lib/icons";
import Link from "next/link";
import { type FC } from "react";
import Meteors from "./magicui/meteors";
import ShineBorder from "./magicui/shine-border";
import { PopupButton } from "@typeform/embed-react";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <nav className="py-2 font-sans overflow-hidden z-50 px-2 sm:px-10">
      <div className="sticky top-0">
        <Meteors />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-3xl w-full md:w-24 cursor-none font-medium">
          Bhaumik Singh
        </h1>
        <ul className="flex gap-x-4 items-center cursor-pointer text-sm text-foreground transition-all duration-300 ease-in-out">
          <li className="py-1 px-4 border rounded-3xl capitalize font-sans font-normal hover:bg-shade hover:text-background hover:font-medium transition-all duration-300 ease-in-out bg-black/30">
            <Link href="#articles">Articles</Link>
          </li>
          <li>
            <Link href="https://github.com/Mic-360" className="cursor-pointer">
              <Icons.github className="h-6 w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer id="contact">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="font-mono font-semibold space-y-8 md:pl-10 w-full max-w-screen-sm">
          <div>
            <h2 className="text-7xl sm:text-8xl lg:text-9xl">Bhaumik</h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-sans font-normal text-shade tracking-wider text-md md:text-lg">
              Full-stack
              <br />
              developer
            </p>
            <h2 className="text-7xl sm:text-8xl lg:text-9xl">Singh</h2>
          </div>
        </div>
        <div className="text-left flex flex-col items-center space-y-8 w-full font-sans px-10 lg:items-end">
          <h2 className="text-xl font-medium font-mono w-full text-center">
            .../Contacts...
          </h2>
          <ul className="flex gap-x-8 cursor-pointer transition-all duration-300 ease-in-out">
            <PopupButton id={"woGMwFuB"}>
              <li className="text-shade hover:text-accent hover:underline underline-offset-2">
                <span>Connect</span>
              </li>
            </PopupButton>
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              <Link href="#about">About</Link>
            </li>
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              <Link href="#project">Projects</Link>
            </li>
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              <Link href="https://github.com/Mic-360/portfolio">Source</Link>
            </li>
          </ul>
          <div className="w-72">
            <div className="border border-accent rounded-3xl p-4 space-y-2 text-shade font-mono relative">
              <ShineBorder
                borderRadius={22}
                color={["#f5f5f5", "#a6a6a6", "#3d3d3d"]}
              >
                <p className="text-xl mb-2">2024 - 2025</p>
                <p className="text-sm">Handcrafted by bhaumic /</p>
                <p className="text-sm">Designed by Taisia /</p>
                <p className="text-sm">Powered by NextJs & Vercel</p>
              </ShineBorder>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex my-10 px-8 items-start md:items-center justify-center gap-2">
        {FooterButtons.map((button, idx) => (
          <Link
            key={idx}
            href={button.link}
            className="flex items-center justify-center px-6 py-2 gap-x-4 rounded-3xl border border-accent capitalize text-shade font-sans font-semibold hover:bg-accent hover:text-foreground transition-all duration-300 ease-in-out"
          >
            {button.icon}
            {button.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export { Footer, Header };
