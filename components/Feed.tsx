import type { FC } from "react";
import { Feed } from "../types/types";
import Marquee from "./magicui/marquee";
import { feeds } from "@/lib/constants";

interface FeedsProps {}

const firstRow = feeds.slice(0, feeds.length / 2);
const secondRow = feeds.slice(feeds.length / 2);

const ArticleCard = ({ title, description, id }: Feed) => {
  return (
    <figure>
      <div className="flex flex-col items-start justify-between w-full rounded-md backdrop-blur-md space-y-4 backdrop-brightness-50 border border-accent">
        <iframe
          src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${id}`}
          allowFullScreen
          title={title}
          aria-label={description}
          className="w-full h-[23rem] rounded-md bg-transparent"
        />
      </div>
    </figure>
  );
};

const Feeds: FC<FeedsProps> = () => {
  return (
    <div className="relative flex h-[44rem] flex-row items-center justify-center overflow-hidden rounded-lg sm:px-20 md:shadow-xl">
      <Marquee vertical pauseOnHover className="[--duration:20s]">
        {firstRow.map((feed, idx) => (
          <ArticleCard key={idx} {...feed} />
        ))}
      </Marquee>
      <Marquee vertical reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((feed, idx) => (
          <ArticleCard key={idx} {...feed} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
};

export default Feeds;
