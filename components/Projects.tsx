import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import Pulse from "./magicui/pulse";
import { cn } from "@/lib/utils";
import RadialGradient from "./magicui/radial-gradient";

const Projects = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto space-y-52">
        <GoStat />
        <GoStat className="lg:flex-row-reverse" />
        <GoStat />
      </div>
    </section>
  );
};

const GoStat = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("flex flex-col lg:flex-row gap-12 items-start", className)}
    >
      <div className="lg:w-1/2 space-y-6">
        <h3 className="text-3xl font-semibold">Gostat</h3>
        <div className="flex flex-wrap gap-2">
          {["Golang", "TypeScript", "Gin", "NextJs", "PostgreSQL", "Redis"].map(
            (tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
        <p className="text-gray-300">
          GOStat - a cutting-edge{" "}
          <span className="text-white">microservice-based</span> application
          designed to handle <span className="text-white">HTTP request</span>{" "}
          authentication and statistics with finesse.
        </p>
        <p className="text-gray-300">
          This project comprises{" "}
          <span className="text-white">several key microservices</span>, each
          contributing to its overall functionality and prowess.
        </p>
        <div className="w-full flex">
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
      </div>
      <div className="lg:w-1/2 space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 rounded-3xl overflow-hidden">
            <Image
              src="https://wallpaperaccess.com/full/628353.jpg"
              alt="GoStat main"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="https://wallpaperaccess.com/full/628353.jpg"
              alt="GoStat detail"
              width={200}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="https://wallpaperaccess.com/full/628353.jpg"
              alt="GoStat overview"
              width={400}
              height={400}
              className="object-cover h-44 w-44"
            />
            <RadialGradient size={200} />
          </div>
          <div className="absolute flex z-10">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
