import Link from "next/link";
import { Icons } from "@/lib/icons";
import Marquee from "./magicui/marquee";
import type { FC } from "react";

interface ArticlesProps {}

const firstRow = Array.from({ length: 6 - 1 });
const secondRow = Array.from({ length: 8 - 2 });

const ArticleCard = () => {
  return (
    <figure className="w-96">
      <div className="flex flex-col items-start justify-between p-4 w-full rounded-3xl backdrop-blur-md space-y-4 backdrop-brightness-50 border border-accent">
        <div className="flex flex-col items-start justify-between p-4 w-full rounded-3xl backdrop-blur-md space-y-4 backdrop-brightness-50">
          <div className="space-y-4">
            <h1 className="text-foreground font-semibold text-xl font-mono">
              Project Name
            </h1>
            <p className="text-foreground text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              necessitatibus, ad, accusantium fugit vero qui enim nobis
              voluptates, itaque pariatur doloribus commodi.
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
    </figure>
  );
};

const Articles: FC<ArticlesProps> = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((_, idx) => (
          <ArticleCard key={idx} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((_, idx) => (
          <ArticleCard key={idx} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default Articles;
