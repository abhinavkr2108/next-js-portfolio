import React from "react";
import TypeWriter from "./TypeWriter";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-slate-50 to-slate-100">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center sm:pt-20 grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Hello Everyone <br /> I am Abhinav
              </h1>

              <h3 className="mt-6 text-[30px] font-medium text-gray-600">
                I am into{" "}
                <span className="text-indigo-500 font-bold underline">
                  <TypeWriter />
                </span>
              </h3>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-4">
                <Link href="/about">
                  <Button size={"lg"} className="rounded-full font-bold">
                    About Me
                  </Button>
                </Link>
                <Link href="https://drive.google.com/file/d/1iu5UEun29N6Q_psydxcNEOZW-ft4KnKj/view?usp=sharing">
                  <Button
                    size={"lg"}
                    className="bg-gray-600 rounded-full font-bold hover:bg-gray-800"
                  >
                    Resume
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-full">
              <Image
                src="/hero.gif"
                alt="hero"
                width={500}
                height={500}
                className="rounded-[100%] shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
