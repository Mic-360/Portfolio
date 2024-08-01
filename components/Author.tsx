"use client";

import Image from "next/image";
import { useEffect, useState, type FC } from "react";

interface AuthorProps {}

const Author: FC<AuthorProps> = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)"); // Adjust breakpoint as needed
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
            alt="Me at Airtel 5G launch event"
            src="/airtel5G.jpg"
            priority
            width={800}
            height={800}
            className="rounded-lg object-cover"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 md:w-1/2 lg:w-2/3 p-2">
          <div className="relative h-40">
            <Image
              alt="Google Devfest Bhubaneshwar 2023"
              src="/devfest-bbsr-card.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative sm:row-span-2 row-span-1">
            <Image
              alt="National Startup Awards 2023"
              src="/national-startup-awards.jpg"
              fill
              sizes="(max-width: 468px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative">
            <Image
              alt="At Soa Campus after winning the best startup award"
              src="/award winnin.png"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative row-span-2">
            <Image
              alt="Soa University Node Red Workshop"
              src="/node-red-workshop.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover sm:object-center"
            />
          </div>
          <div className="relative row-span-2">
            <Image
              alt="Me standing on stage at Azure DevDay giving a talk about Github Actions"
              src="/speaker.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-40">
            <Image
              alt="Explaining concepts of Node Red to students at Soa University"
              src="/node-red-explain.jpg"
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
