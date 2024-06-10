"use client";

import Image from "next/image";
import { useEffect, useState, type FC } from "react";

interface AuthorProps {}

const Author: FC<AuthorProps> = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust breakpoint as needed
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);
    handleResize(); // Check initial state

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className="mb-10">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src="https://wallpaperaccess.com/full/628353.jpg"
            priority
            width={800}
            height={800}
            className="rounded-lg object-cover"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 md:w-1/2 p-2">
          <div className="relative h-40">
            <Image
              alt="Me speaking on stage at React Summit about the future of Next.js"
              src="https://wallpaperaccess.com/full/628353.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative sm:row-span-2 row-span-1">
            <Image
              alt="Me standing on stage at Reactathon delivering the keynote"
              src="https://wallpaperaccess.com/full/628353.jpg"
              fill
              sizes="(max-width: 468px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative">
            <Image
              alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
              src="https://wallpaperaccess.com/full/628353.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative row-span-2">
            <Image
              alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
              src="https://wallpaperaccess.com/full/628353.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover sm:object-center"
            />
          </div>
          <div className="relative row-span-2">
            <Image
              alt="My badge on top of a pile of badges from a Vercel meetup we held"
              src="https://wallpaperaccess.com/full/628353.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-40">
            <Image
              alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
              src="https://wallpaperaccess.com/full/628353.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Author;
