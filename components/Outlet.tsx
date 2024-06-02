import type { FC } from "react";
import { FooterButtons } from "@/lib/constants";
import Link from "next/link";
import Meteors from "./magicui/meteors";
import ShineBorder from "./magicui/shine-border";
import { Icons } from "@/lib/icons";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <nav className="sticky top-1 flex items-center justify-between py-2 font-sans overflow-hidden backdrop-blur-xl rounded-3xl px-2 sm:px-10">
      <Meteors number={30} />
      <h1 className="text-lg md:text-3xl w-full md:w-24 cursor-none font-medium">
        Bhaumik Singh
      </h1>
      <ul className="md:flex gap-x-4 cursor-pointer text-foreground transition-all duration-300 ease-in-out hidden">
        <li className="py-1 px-4 rounded-3xl capitalize font-sans font-light hover:bg-accent hover:text-shade hover:underline underline-offset-2 transition-all duration-300 ease-in-out">
          <Link href="#about">
            About
            <span className="font-mono font-normal text-xs pl-1">\.. </span>
          </Link>
        </li>
        <li className="py-1 px-4 rounded-3xl capitalize font-sans font-light hover:bg-accent hover:text-shade hover:underline underline-offset-2 transition-all duration-300 ease-in-out">
          <Link href="#project">
            Project
            <span className="font-mono font-normal text-xs pl-1">\.. </span>
          </Link>
        </li>
        <li className="py-1 px-4 rounded-3xl capitalize font-sans font-light hover:bg-accent hover:text-shade hover:underline underline-offset-2 transition-all duration-300 ease-in-out">
          <Link href="#article">
            Article
            <span className="font-mono font-normal text-xs pl-1">\.. </span>
          </Link>
        </li>
        <li className="py-1 px-4 rounded-3xl capitalize font-sans font-light hover:bg-accent hover:text-shade hover:underline underline-offset-2 transition-all duration-300 ease-in-out">
          <Link href="#contact">
            Contact
            <span className="font-mono font-normal text-xs pl-1">\.. </span>
          </Link>
        </li>
      </ul>
      <Link
        href="https://github.com/Mic-360/portfolio"
        className="cursor-pointer"
      >
        <Icons.github className="h-6 w-6" />
      </Link>
    </nav>
  );
};

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="font-mono font-semibold space-y-8 pl-10 ">
          <div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">Bhaumik</h2>
          </div>
          <div className="flex gap-x-10 md:gap-x-20 lg:gap-x-32 items-center">
            <p className="font-sans font-normal text-shade tracking-wider text-sm md:text-lg">
              Full-stack
              <br />
              developer
            </p>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">Singh</h2>
          </div>
        </div>
        <div className="text-left flex flex-col items-start md:items-center space-y-8 w-full font-sans px-8 lg:items-end">
          <h2 className="text-xl font-medium font-mono w-72">
            .../Contacts...
          </h2>
          <ul className="flex gap-x-8 cursor-pointer transition-all duration-300 ease-in-out">
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              Connect
            </li>
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              About
            </li>
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              Projects
            </li>
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              Articles
            </li>
          </ul>
          <div className="w-72">
            <div className="border border-accent rounded-3xl p-4 space-y-2 text-shade font-mono relative">
              <ShineBorder
                borderRadius={22}
                color={["#f5f5f5", "#a6a6a6", "#3d3d3d"]}
              >
                <p className="text-xl mb-2 font-sans">Site</p>
                <p className="text-sm">Handcrafted by ME /</p>
                <p className="text-sm">Designed by v0 /</p>
                <p className="text-sm">Powered by Next Js</p>
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
            className="flex items-center justify-center py-1 px-6 gap-x-4 rounded-3xl border border-accent capitalize text-shade font-sans font-semibold hover:bg-accent hover:text-foreground transition-all duration-300 ease-in-out"
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
