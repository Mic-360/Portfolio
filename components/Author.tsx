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
              src="https://media.licdn.com/dms/image/D4D22AQFJBOC92qYENw/feedshare-shrink_1280/0/1670766067189?e=1721865600&v=beta&t=JUieywP-QEycFBORnycLTpUdo38b2MnsCJTPSsxYiuU"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative sm:row-span-2 row-span-1">
            <Image
              alt="National Startup Awards 2023"
              src="https://media.licdn.com/dms/image/D5622AQF6uu_wMGp7ig/feedshare-shrink_800/0/1705840308457?e=1721865600&v=beta&t=KDvn1KpdeLY1zZ8_PzjJCICv8qcV42GmtrBpEg_gwBw"
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
              src="https://media.licdn.com/dms/image/C4D22AQFJi7tziSD-Ew/feedshare-shrink_1280/0/1673895349913?e=1721865600&v=beta&t=ut0BZV8L51nAr6tnkDzHTPrWR5Kk77zgQUykrl6KQ0k"
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
              src="https://media.licdn.com/dms/image/C4D22AQHvCDdeFLDWKg/feedshare-shrink_1280/0/1673895350162?e=1721865600&v=beta&t=oOIX38D-tAwf9-EucsCcP4ySmiLGrGKoR1iLBCm41Jw"
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
