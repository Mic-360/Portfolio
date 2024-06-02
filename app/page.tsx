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
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen px-8 py-8">
      {/* banner */}
      <header className="space-y-4">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex px-8 py-8 items-start md:items-center justify-center gap-2.5">
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
      <section className="px-8 py-10 mb-20">
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
    </div>
  );
}
