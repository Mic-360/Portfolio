import { FooterButtons } from "@/lib/constants";
import { Icons } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 mb-20 lg:justify-between">
      <div className="flex flex-col gap-y-8 lg:w-2/3">
        <h1 className="text-xl">GoStat</h1>
        <div className="grid grid-cols-3 gap-x-3 gap-y-2 w-4/5 sm:w-2/5 lg:w-4/5">
          {FooterButtons.map((button, idx) => (
            <Link
              key={idx}
              href={button.link}
              className="flex items-center justify-center py-2 px-4 gap-x-4 rounded-3xl border border-accent capitalize text-shade font-sans font-semibold hover:bg-accent hover:text-foreground transition-all duration-300 ease-in-out text-xs"
            >
              {button.name}
            </Link>
          ))}
        </div>
        <article className="text-shade space-y-4 my-10 md:w-2/3 lg:w-full">
          <p>
            GOStat a cutting-edge{" "}
            <span className="text-foreground">microservice-based</span>{" "}
            application designed to handle{" "}
            <span className="text-foreground">HTTP request</span> authentication
            and statistics with finesse.
          </p>{" "}
          <p>
            {" "}
            This project comprises{" "}
            <span className="text-foreground">several key microservices</span>,
            each contributing to its overall functionality and prowess.
          </p>
        </article>
        <div className="flex justify-start">
          <Link
            href={"/"}
            className="flex items-center justify-center -space-x-4 w-fit"
          >
            <Icons.github className="h-12 w-12 p-2.5 border rounded-full -z-10" />
            <Icons.right className="h-12 w-12 p-4 rounded-full bg-foreground text-accent -rotate-45" />
          </Link>
        </div>
      </div>
      <div className="space-y-2 flex flex-col justify-center items-center">
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-4 relative">
            <Image
              alt="GOStat"
              src="https://wallpaperaccess.com/full/628353.jpg"
              priority
              height={800}
              width={800}
              className="rounded-3xl object-cover"
            />
            <div className="absolute right-0 bottom-0">
              <div
                style={{
                  borderTop: "10px solid #121212",
                  borderLeft: "10px solid #121212",
                  borderTopLeftRadius: "1.5rem",
                  backgroundColor: "#121212",
                }}
              >
                <Image
                  alt="GOStat"
                  src="https://wallpaperaccess.com/full/628353.jpg"
                  priority
                  height={250}
                  width={250}
                  className="rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              alt="GOStat"
              src="https://wallpaperaccess.com/full/628353.jpg"
              priority
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            alt="GOStat"
            src="https://wallpaperaccess.com/full/628353.jpg"
            priority
            height={250}
            width={250}
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
