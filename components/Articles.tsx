"use client";

import { useEffect, useState, type FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Icons } from "@/lib/icons";

interface ArticlesProps {}

const Articles: FC<ArticlesProps> = () => {
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
        <section className="px-16 py-10">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 w-full rounded-3xl backdrop-blur-md space-y-10 backdrop-brightness-50 h-60"
                  >
                    <div className="flex flex-col items-start justify-evenly py-4 px-8 w-full rounded-3xl backdrop-blur-md space-y-4 backdrop-brightness-50">
                      <div className="space-y-4">
                        <h1 className="text-foreground font-semibold text-xl font-mono">
                          Project Name
                        </h1>
                        <p className="text-foreground text-xs w-fit">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quas necessitatibus, ad, accusantium fugit vero
                          qui enim nobis voluptates, itaque pariatur doloribus
                          commodi.
                        </p>
                      </div>
                      <div className="flex gap-x-2 items-center justify-center">
                        <div className="px-4 font-normal bg-white rounded-full py-1.5 text-background italic text-xs">
                          Read More...
                        </div>
                        <Link
                          href="/about"
                          className="bg-white p-2 rounded-full text-background"
                        >
                          <Icons.right className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="backdrop-blur-lg bg-background" />
            <CarouselNext className="backdrop-blur-lg bg-background" />
          </Carousel>
        </section>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-between items-start px-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between p-4 w-full rounded-3xl backdrop-blur-md space-y-4 backdrop-brightness-50"
            >
              <div className="flex flex-col items-start justify-between p-4 w-full rounded-3xl backdrop-blur-md space-y-4 backdrop-brightness-50">
                <div className="space-y-4">
                  <h1 className="text-foreground font-semibold text-xl font-mono">
                    Project Name
                  </h1>
                  <p className="text-foreground text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas necessitatibus, ad, accusantium fugit vero qui enim
                    nobis voluptates, itaque pariatur doloribus commodi.
                  </p>
                </div>
                <div className="flex gap-x-2 items-center justify-center pr-8">
                  <div className="px-4 font-normal bg-white rounded-full py-1.5 text-background italic text-xs">
                    Read More...
                  </div>
                  <Link
                    href="/about"
                    className="bg-white p-2 rounded-full text-background"
                  >
                    <Icons.right className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Articles;
