import Projects from "@/components/Projects";
import WorkTable from "@/components/WorkTable";
import BoxReveal from "@/components/magicui/box-reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FooterButtons } from "@/lib/constants";
import { Icons } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen py-8">
      {/* banner */}
      <header className="space-y-4 px-8">
        <div className="mt-14 flex justify-between items-center">
          <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
            <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">
              Full-stack
            </h1>
          </BoxReveal>
          <div className="hidden md:flex gap-x-2 items-center justify-center pr-10 animate-fade-in">
            <div className="px-20 font-normal bg-foreground rounded-full py-1.5 text-background italic">
              Projects
            </div>
            <Link
              href="/about"
              className="bg-foreground p-2 rounded-full text-background"
            >
              <Icons.right className="h-4 w-4" />
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
              to process development was enjoyable.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
            <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold pl-16 lg:pl-0">
              Developer
            </h1>
          </BoxReveal>
        </div>
        <div className="flex md:hidden gap-x-2 items-center justify-start animate-fade-in">
          <div className="px-20 font-normal bg-foreground rounded-full py-1.5 text-background italic">
            Projects
          </div>
          <Link
            href="/about"
            className="bg-foreground p-2 rounded-full text-background"
          >
            <Icons.right className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex px-4 md:px-6 lg:px-8 py-8 items-start md:items-center justify-center gap-2.5">
          {FooterButtons.map(
            (button, idx) =>
              button.name !== "e-mail" && (
                <Link
                  key={idx}
                  href={button.link}
                  className={`flex items-center justify-center py-2 px-4 gap-x-4 rounded-3xl border border-accent capitalize text-shade font-sans font-semibold hover:bg-accent hover:text-foreground transition-all duration-300 ease-in-out ${idx === 3 ? "lg:mx-20" : ""}`}
                >
                  <span className="text-foreground">{button.icon}</span>
                  {button.name}
                </Link>
              )
          )}
        </div>
      </header>
      {/* Carousel  */}
      <section className="px-16 py-10 mb-20">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="backdrop-blur-lg bg-background" />
          <CarouselNext className="backdrop-blur-lg bg-background" />
        </Carousel>
      </section>
      {/* About me */}
      <main className="px-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start my-20">
          <h2 className="text-foreground w-11/12 font-medium font-mono">
            .../About me...
          </h2>
          <p className="text-shade w-full">
            Hello! I&apos;m{" "}
            <span className="text-foreground italic">Bhaumik</span>, I&apos;m a
            full-stack developer.
            <br /> More than{" "}
            <span className="text-foreground italic">5 years</span> experience.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
          <div className="text-shade font-sans md:w-7/12 space-y-4">
            <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
              <p className="flex flex-col py-2.5 px-4 space-y-2 rounded-3xl bg-foreground text-accent">
                <span className="text-lg">Front-end</span>
                <span className="font-mono text-sm">
                  TypeScript / React / Vue / Vuex / Redux Toolkit / Next Js /
                  Nuxt / Jest / GraphQL / React Native / Puppeteer
                </span>
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
              <h3 className="flex justify-between items-center gap-x-8">
                <p className="flex flex-col gap-y-2 w-1/2 border rounded-3xl px-4 py-2.5">
                  <span className="text-lg">Styles</span>
                  <span className="font-mono">
                    SCSS / SASS / PostCSS / Ant. d / Material UI
                  </span>
                </p>
                <div className="w-1/2 flex justify-center">
                  <Link
                    href={"/"}
                    className="flex items-center justify-center -space-x-4 w-fit"
                  >
                    <Icons.github className="h-12 w-12 p-2.5 border rounded-full -z-10" />
                    <Icons.right className="h-12 w-12 p-4 rounded-full bg-foreground text-accent -rotate-45" />
                  </Link>
                </div>
              </h3>
            </BoxReveal>
            <BoxReveal boxColor={"#a6a6a6"} duration={0.5}>
              <p className="flex flex-col py-2.5 px-4 space-y-2 rounded-3xl border border-shade">
                <span className="text-lg">Back-end</span>
                <span className="font-mono text-sm">
                  Golang / Gin / GORM / PostgreSQL / MySQL / MongoDB / gRPC /
                  Redis / Kafka / Node / Nest / TypeORM / Microservices
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
              <h3 className="border border-shade rounded-3xl py-2.5 px-4 space-y-2">
                <p className="text-lg">DevOps</p>
                <p className="font-mono">
                  Nginx / Brotli / Docker /<br /> (CI / CD) / k8s / bash
                </p>
              </h3>
            </article>
          </div>
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
                sizes="(max-width: 768px) 213px, 33vw"
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
              <span className="text-shade">Work Experience</span>
              <br />
              <span className="text-foreground italic">4 years 9 months</span>
            </p>
          </BoxReveal>
        </div>
      </section>
      {/* projects */}
      <section className="px-10">
        <div className="flex justify-center items-center my-10">
          <h2 className="text-foreground text-xl font-medium font-mono">
            .../Projects...
          </h2>
        </div>
        <Projects />
        <Projects />
        <Projects />
      </section>
    </div>
  );
}
