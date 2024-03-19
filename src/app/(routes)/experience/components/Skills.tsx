import Image from "next/image";
import React from "react";

export default function Skills() {
  const skillItems = [
    {
      title: "Javascript",
      icon: "/public/skills/1.png",
      className: "bg-yellow-50",
    },
    {
      title: "NodeJs",
      icon: "/public/skills/2.png",
      className: "bg-green-50",
    },
    {
      title: "Redux",
      icon: "/public/skills/3.png",
      className: "bg-purple-50",
    },
    {
      title: "HTML",
      icon: "/public/skills/4.png",
      className: "bg-orange-50",
    },
    {
      title: "CSS",
      icon: "/public/skills/5.png",
      className: "bg-blue-50",
    },
    {
      title: "Typescript",
      icon: "/public/skills/6.png",
      className: "bg-blue-50",
    },
    {
      title: "NextJs",
      icon: "/public/skills/7.png",
      className: "bg-slate-50",
    },
    {
      title: "Chakra UI",
      icon: "/public/skills/8.png",
      className: "bg-sky-50",
    },
    {
      title: "MongoDB",
      icon: "/public/skills/9.png",
      className: "bg-green-50",
    },
    {
      title: "Firebase",
      icon: "/public/skills/10.png",
      className: "bg-yellow-50",
    },
    {
      title: "React",
      icon: "/public/skills/11.png",
      className: "bg-blue-50",
    },
    {
      title: "React Native",
      icon: "/public/skills/11.png",
      className: "bg-blue-50",
    },
    {
      title: "Drizzle ORM",
      icon: "/public/skills/12.png",
      className: "bg-yellow-50",
    },
    {
      title: "Tailwind CSS",
      icon: "/public/skills/13.png",
      className: "",
    },
    {
      title: "VS Code",
      icon: "/public/skills/14.png",
      className: "bg-blue-50",
    },
    {
      title: "Intellij Idea",
      icon: "/public/skills/15.png",
      className: "bg-indigo-50",
    },
    {
      title: "Java",
      icon: "/public/skills/16.png",
      className: "bg-orange-50",
    },
  ];
  return (
    <div className="grid grid-cols-4">
      {skillItems.map((item, idx) => (
        <div key={idx} className={`flex flex-col items-center justify-center`}>
          <div className={`p-4 rounded-[100%] gap-6 ${item.className}`}>
            <Image
              src={item.icon.replace("/public", "")}
              alt={item.title}
              width={100}
              height={100}
              className="w-10 h-10"
            />
          </div>
          <p className="text-lg font-semibold pt-2">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
