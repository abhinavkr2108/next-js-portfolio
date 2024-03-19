import React from "react";
import Skills from "./components/Skills";
import Image from "next/image";
import TypeWriter from "@/components/shared/TypeWriter";

export default function AboutPage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto w-full px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <div>
            <div className="h-72 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <Image
                src="/about_me.png"
                alt="hero"
                width={300}
                height={300}
                className="h-full w-full flex items-center justify-center"
              />
            </div>
          </div>

          <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center md:col-span-2">
            <p className="text-center font-bold text-muted-foreground text-lg md:text-left">
              About Me
            </p>

            <h1 className="mb-4 text-center font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              Hi I am Abhinav Kumar and I am into <br />
              <span className="text-indigo-500">
                <TypeWriter />
              </span>
            </h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              I am a passionate software developer. I use my skills in the MERN
              stack (MongoDB, Express.js, React.js, and Node.js) to build modern
              applications. I am well versed with Next.js and TypeScript to
              build modern, scalable, and type-safe web applications. empowering
              me to create dynamic and maintainable codebases.
              <br />
              Beyond web development, I have a keen interest in solving Data
              Structures and Algorithms (DSA), problems using the Java language,
              which demonstrate my ability to solve complex problems
              efficiently, making me a versatile developer capable of delivering
              high-quality software solutions.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
