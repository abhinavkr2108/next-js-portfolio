"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Bot, MenuIcon } from "lucide-react";
import Drawer from "./Drawer";
import { IoLogoNodejs } from "react-icons/io5";
import { Nunito, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Header() {
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Experience", path: "/experience" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blogs" },
  ];
  return (
    <div className="px-8 md:px-12 lg:px-20 h-14 bg-white shadow-md sticky top-0 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <IoLogoNodejs
          size={32}
          className="text-slate-600"
          fontFamily="nunito"
        />{" "}
        <p className={poppins.className + " text-xl font-bold text-slate-500"}>
          Abhinav
        </p>
      </div>
      <div className="hidden md:flex gap-4 cursor-pointer">
        {navigation.map((item, index) => {
          return (
            <Link
              href={item.path}
              key={index}
              className="hover:text-blue-500 font-semibold text-slate-500"
            >
              <div
                key={item.path}
                className={poppins.className + "font-semibold"}
              >
                {item.title}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-4 items-center">
        <Button className="rounded-full font-bold">
          <Bot />
        </Button>
        <div className="sm:block md:hidden">
          <Drawer navigation={navigation} />
        </div>
      </div>
    </div>
  );
}
