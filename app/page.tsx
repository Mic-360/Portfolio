import Author from "@/components/Author";
import ArticleCard from "@/components/Card";
import Feeds from "@/components/Feed";
import WorkTable from "@/components/WorkTable";
import AnimatedGridPattern from "@/components/magicui/animated-grid";
import BoxReveal from "@/components/magicui/box-reveal";
import DotPattern from "@/components/magicui/dot-pattern";
import Pulse from "@/components/magicui/pulse";
// import Projects from "@/components/Projects";
// import RadialGradient from "@/components/magicui/radial-gradient";
// import {
//   Carousel,
//   CarouselNext,
//   CarouselItem,
//   CarouselContent,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { baseBlogUrl } from "@/lib/config";
import { FooterButtons } from "@/lib/constants";
import { Icons } from "@/lib/icons";
import { cn, formatDate } from "@/lib/utils";
import { Blog } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${baseBlogUrl}api/blogs/`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: Blog[] = await getData();

  return (
    <div className="font-sans items-center justify-items-center min-h-screen py-8">
      {/* hero section */}
      <div className="relative">
        {/* banner */}
        <header className="space-y-4 px-8 lg:px-20">
          <div className="mt-14 flex justify-between items-center">
            <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
              <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold">
                Full-stack
              </h1>
            </BoxReveal>
            <div className="hidden md:flex gap-x-2 items-center justify-center pr-10 animate-fade-in">
              <div className="px-20 font-normal bg-foreground rounded-full py-1.5 text-background italic">
                Resume...
              </div>
              <Link
                href="/R_resume.pdf"
                className="bg-foreground p-2 rounded-full text-background"
              >
                <Pulse>
                  <Icons.right className="h-4 w-4 rotate-90" />
                </Pulse>
              </Link>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4 justify-between text-start lg:items-center px-2 py-4 lg:py-0">
            <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
              <p className="w-72 text-shade">
                My goal is to{" "}
                <span className="text-foreground italic">
                  write maintainable, clean
                </span>{" "}
                and{" "}
                <span className="text-foreground italic">
                  understandable code
                </span>{" "}
                to make development process enjoyable.
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
              <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold pl-14 lg:pl-0">
                Developer
              </h1>
            </BoxReveal>
          </div>
          <div className="flex md:hidden gap-x-2 items-center justify-start animate-fade-in">
            <div className="px-20 font-normal bg-foreground rounded-full py-1.5 text-background italic">
              Resume...
            </div>
            <Link
              href="/R_resume.pdf"
              className="bg-foreground p-2 rounded-full text-background"
            >
              <Icons.right className="h-4 w-4 rotate-90" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex px-4 md:px-6 lg:px-8 py-8 items-start md:items-center justify-center gap-2.5">
            {FooterButtons.map(
              (button, idx) =>
                button.name !== "e-mail" && (
                  <Link
                    key={idx}
                    href={button.link}
                    className={`flex items-center justify-center py-2 px-4 gap-x-4 rounded-3xl border border-accent capitalize text-shade font-sans font-semibold hover:bg-accent hover:text-foreground transition-all duration-300 ease-in-out bg-black/50 ${idx === 3 ? "lg:mx-20" : ""}`}
                  >
                    <span className="text-foreground">{button.icon}</span>
                    {button.name}
                  </Link>
                )
            )}
          </div>
        </header>
        {/* Carousel  */}
        {/* <section className="px-16 py-10 mb-20">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="relative md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="flex flex-row-reverse border-2 w-full h-60 rounded-3xl"
                    style={{
                      backgroundImage:
                        "url('https://wallpaperaccess.com/full/628353.jpg')",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="flex flex-col items-start justify-between p-4 w-2/3 rounded-e-3xl backdrop-blur-md space-y-4 backdrop-brightness-50">
                      <div className="space-y-4">
                        <h1 className="text-foreground font-semibold text-xl font-mono">
                          Project Name
                        </h1>
                        <p className="text-foreground text-xs">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quas necessitatibus, ad, accusantium fugit vero
                          qui enim nobis voluptates, itaque pariatur doloribus
                          commodi.
                        </p>
                      </div>
                      <div className="flex gap-x-2 items-center justify-center pr-6">
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
            <CarouselPrevious className="backdrop-blur-lg bg-background z-10" />
            <CarouselNext className="backdrop-blur-lg bg-background z-10" />
            <RadialGradient />
          </Carousel>
        </section> */}
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] -z-10"
          )}
        />
      </div>
      {/* Intro to work and about */}
      <div id="about" className="relative">
        {/* About me */}
        <main className="px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start my-20">
            <h2 className="text-foreground w-11/12 font-medium font-mono">
              .../About me...
            </h2>
            <p className="text-shade w-full">
              Hello! I&apos;m{" "}
              <span className="text-foreground text-xl">Bhaumik</span>, a
              full-stack developer.
              <br /> With more than{" "}
              <span className="text-foreground italic">4 years</span>{" "}
              experience.
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
            <div className="text-shade font-sans md:w-6/12 space-y-4">
              <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
                <p className="flex flex-col py-2.5 px-4 space-y-2 rounded-3xl highlight bg-black/20 border">
                  <span className="text-xl font-semibold">Front-end</span>
                  <span className="font-mono text-sm">
                    TypeScript / React / Vue / Svelte / Redux / Next Js / Nuxt /
                    Jest / GraphQL / React Native / Flutter
                  </span>
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
                <h3 className="flex justify-between items-center gap-x-8">
                  <p className="flex flex-col gap-y-2 w-full border rounded-3xl px-4 py-2.5 highlight bg-black/20">
                    <span className="text-xl font-semibold">Styles</span>
                    <span className="font-mono">
                      SCSS / Tailwind / PostCSS / Ant. d / Material UI
                    </span>
                  </p>
                  <div className="w-full flex justify-center">
                    <Link
                      href={"https://gist.github.com/Mic-360"}
                      className="flex items-center justify-center -space-x-4 w-fit"
                    >
                      <Pulse>
                        <Icons.github className="h-12 w-12 p-2.5 border rounded-full -z-10" />
                      </Pulse>
                      <Icons.right className="h-12 w-12 p-4 rounded-full bg-foreground text-accent -rotate-45" />
                    </Link>
                  </div>
                </h3>
              </BoxReveal>
              <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
                <p className="flex flex-col py-2.5 px-4 space-y-2 rounded-3xl border border-shade highlight bg-black/20">
                  <span className="text-xl font-semibold">Back-end</span>
                  <span className="font-mono text-sm">
                    Golang / Rust / Prisma / PostgreSQL / MySQL / MongoDB / tRPC
                    / Redis / Kafka / Node / Nest / TypeORM / Microservices
                  </span>
                </p>
              </BoxReveal>
              <article className="flex text-sm items-center justify-between">
                <p>
                  Some of my{" "}
                  <span className="italic text-foreground">
                    favorite technologies, <br />
                    topics, or tools
                  </span>{" "}
                  that I worked with.
                </p>
                <h3 className="border border-shade rounded-3xl py-2.5 px-4 space-y-2 highlight bg-black/20">
                  <p className="text-xl font-semibold">DevOps</p>
                  <p className="font-mono">
                    Nginx / Actions / Docker /<br /> (CI / CD) / k8s / bash
                  </p>
                </h3>
              </article>
            </div>
            <Author />
          </div>
        </main>
        {/* work */}
        <section>
          <div className="flex justify-end mt-20 px-8 mb-8">
            <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
              <div className="flex flex-col justify-end items-end">
                <h2 className="text-foreground text-7xl font-semibold font-mono">
                  Work
                </h2>
                <p className="text-shade text-right text-sm">
                  I have worked with{" "}
                  <span className="text-foreground italic">
                    many companies and startups
                  </span>{" "}
                  and have{" "}
                  <span className="text-foreground italic">
                    experienced with many technologies
                  </span>
                  .
                </p>
              </div>
            </BoxReveal>
          </div>
          <WorkTable />
          <div className="flex px-8 mb-8 py-4 justify-end items-end">
            <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
              <p className="text-shade text-sm w-full text-right">
                <span className="text-foreground italic">4 years 9 months</span>
                <br />
                <span className="text-shade">Professional Work Experience</span>
              </p>
            </BoxReveal>
          </div>
        </section>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -mt-64 -z-10 blur-[0.7px]"
          )}
        />
      </div>
      {/* articles */}
      <article id="articles" className="pt-10 pb-20">
        <div className="p-8 flex flex-col gap-4 md:flex-row justify-between">
          <h2 className="text-foreground w-11/12 font-medium font-mono text-xl">
            .../Articles...
          </h2>
          <p className="text-sm">
            Interesting and new things I stumble across and then write about
            them.
          </p>
        </div>
        <div className="w-screen h-screen relative flex items-center overflow-x-hidden">
          <ScrollArea className="px-2 rounded-lg">
            <div className="flex w-max space-x-4">
              {data.map((article, idx) => (
                <ArticleCard
                  key={idx}
                  link={baseBlogUrl + article.slug}
                  thumbnail={article.thumbnail}
                  title={article.title}
                  description={article.description}
                  date={formatDate(article.date)}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Image
            src="/journal.jpg"
            alt="journal"
            fill
            priority
            className="-z-10 absolute"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
        </div>
      </article>
      {/* projects */}
      {/* <section id="project" className="relative px-10">
        <div className="flex justify-center items-center my-10">
          <h2 className="text-foreground text-xl font-medium font-mono">
            .../Projects...
          </h2>
        </div>
        <Projects />
        <Projects />
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] -z-10 blur-[0.5px]"
          )}
        />
      </section> */}
      {/* feed */}
      <main id="feed" className="relative pb-20 pt-10">
        <div className="flex flex-col px-8 items-end">
          <h1 className="flex items-baseline justify-center  gap-x-2 font-mono font-semibold text-4xl md:text-6xl">
            <span>Feed</span>{" "}
            <span>
              <svg
                width="60px"
                height="60px"
                viewBox="-10 -5 1034 1034"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <path
                  fill="#ffffff"
                  d="M75 175v170q135 0 260 52t220.5 147.5t147.5 220.5t52 260h170q0 -169 -64.5 -325t-184.5 -275.5t-276 -184.5t-325 -65zM75 462v165q79 0 152.5 30.5t129.5 86.5t86 129t30 152h165q0 -112 -42.5 -215.5t-122 -182.5t-183 -122t-215.5 -43zM192 792q-32 0 -59 16 t-42.5 42.5t-15.5 58.5t15.5 58.5t42.5 42t58.5 15.5t58.5 -15.5t42.5 -42t15.5 -58.5t-15.5 -58.5t-42.5 -42.5t-58 -16z"
                />
              </svg>
            </span>
          </h1>
        </div>
        <hr className="my-4" />
        <Feeds />
      </main>
    </div>
  );
}
