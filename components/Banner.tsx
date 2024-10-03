"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icons } from "@/lib/icons";
import { FooterButtons } from "@/lib/constants";

const MotionLink = motion(Link);

export default function Banner() {
  return (
    <header className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.h1
            className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Full-stack
          </motion.h1>
          <motion.div
            className="flex items-center gap-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-4 sm:px-6 md:px-8 lg:px-10 font-normal bg-foreground rounded-full py-2 text-background italic text-sm sm:text-base">
              Resume...
            </div>
            <Link
              href="/R_resume.pdf"
              className="p-2 rounded-full text-background bg-foreground hover:bg-accent transition-colors duration-300"
            >
              <Icons.right className="h-4 w-4 rotate-90" />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            className="text-shade text-sm sm:text-base md:text-lg max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            My goal is to{" "}
            <span className="text-foreground italic">
              write maintainable, clean
            </span>{" "}
            and{" "}
            <span className="text-foreground italic">understandable code</span>{" "}
            to make development process enjoyable.
          </motion.p>
          <motion.h1
            className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Developer
          </motion.h1>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {FooterButtons.map(
            (button, idx) =>
              button.name !== "e-mail" && (
                <MotionLink
                  key={idx}
                  href={button.link}
                  className={`flex items-center justify-center py-2 px-4 gap-x-2 rounded-full border border-accent capitalize text-shade font-sans font-semibold hover:bg-accent hover:text-foreground transition-all duration-300 ease-in-out bg-black/50 ${idx === 3 ? "col-span-2 sm:col-span-1" : ""}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-foreground">{button.icon}</span>
                  <span className="hidden sm:inline">{button.name}</span>
                </MotionLink>
              )
          )}
        </motion.div>
      </div>
    </header>
  );
}
