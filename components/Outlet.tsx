import type { FC } from "react";
import { footerLinks } from "@/lib/constants";
import Link from "next/link";
import Meteors from "./magicui/meteors";
import ShineBorder from "./magicui/shine-border";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <nav className="sticky top-1 flex items-center justify-between py-2 font-sans overflow-hidden backdrop-blur-xl rounded-3xl px-10">
      <Meteors number={30} />
      <h1 className="text-2xl w-24 cursor-none font-medium">Bhaumik Singh</h1>
      <ul className="flex gap-x-10 cursor-pointer text-foreground transition-all duration-300 ease-in-out">
        <li className="py-1 px-4 rounded-3xl capitalize font-sans font-light hover:bg-accent hover:text-shade transition-all duration-300 ease-in-out">
          <Link href="#about">About</Link>
        </li>
        <li className="py-1 px-4 rounded-3xl capitalize font-sans font-light hover:bg-accent hover:text-shade transition-all duration-300 ease-in-out">
          <Link href="#project">Project</Link>
        </li>
        <li className="py-1 px-4 rounded-3xl capitalize font-sans font-light hover:bg-accent hover:text-shade transition-all duration-300 ease-in-out">
          <Link href="#article">Article</Link>
        </li>
        <li className="py-1 px-4 rounded-3xl capitalize font-sans font-light hover:bg-accent hover:text-shade transition-all duration-300 ease-in-out">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div className="cursor-not-allowed">EN</div>
    </nav>
  );
};

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer>
      <div className="flex gap-x-8 items-center">
        <div className="font-mono font-semibold space-y-8 pl-10 pt-20">
          <div>
            <h2 className="text-8xl">Bhaumik</h2>
          </div>
          <div className="flex gap-x-32 items-center">
            <p className="font-sans font-normal text-shade tracking-wider">
              Full-stack
              <br />
              developer
            </p>
            <h2 className="text-8xl">Singh</h2>
          </div>
        </div>
        <div className="px-10 space-y-8 w-full font-sans">
          <h2 className="text-xl font-medium font-mono px-10">
            .../Contacts...
          </h2>
          <ul className="flex justify-around w-full cursor-pointer transition-all duration-300 ease-in-out">
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              Main
            </li>
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              About
            </li>
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              Project
            </li>
            <li className="text-shade hover:text-accent hover:underline underline-offset-2">
              Articles
            </li>
          </ul>
          <div className="px-10">
            <div className="border border-accent rounded-3xl p-4 space-y-2 text-shade font-mono relative">
              <ShineBorder
                borderRadius={22}
                color={["#f5f5f5", "#a6a6a6", "#3d3d3d"]}
              >
                <p className="text-xl mb-2 font-sans">Site</p>
                <p className="text-sm">Handcrafted by ME /</p>
                <p className="text-sm">Designed by ME /</p>
                <p className="text-sm">Powered by Next Js</p>
              </ShineBorder>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-10 items-center justify-center gap-x-2">
        {footerLinks.map((button, idx) => (
          <div className="relative" key={idx}>
            <ShineBorder
              borderRadius={22}
              color={["#f5f5f5", "#a6a6a6", "#3d3d3d"]}
            >
              <Link
                href={`https://www.${button}.com`}
                className="flex items-center justify-center py-1 px-12 rounded-3xl border border-accent capitalize text-shade font-sans font-semibold hover:bg-accent hover:text-foreground transition-all duration-300 ease-in-out"
              >
                {button}
              </Link>
            </ShineBorder>
          </div>
        ))}
      </div>
    </footer>
  );
};

export { Footer, Header };
