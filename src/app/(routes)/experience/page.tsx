import React from "react";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";

export default function ExperiencePage() {
  return (
    <div>
      <h3 className="text-gray-500 py-10 text-center text-3xl font-semibold sm:text-4xl">
        Experience and Hackathons Participated
      </h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <Skills />
        <Timeline />
      </div>
    </div>
  );
}
