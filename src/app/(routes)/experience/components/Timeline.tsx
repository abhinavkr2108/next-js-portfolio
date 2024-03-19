"use client";
import React from "react";

export default function Timeline() {
  return (
    <ol className="border-l border-neutral-300 dark:border-neutral-500">
      {/* <!--First item--> */}
      <li>
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            July 2023 - Present
          </p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <h4 className="mb-1.5 text-xl font-semibold">
            Hashnode - Content Writer
          </h4>
          <h5
            onClick={() => window.open("https://coderzspot.hashnode.dev/")}
            className="mb-3 text-neutral-500 dark:text-neutral-300 underline text-lg cursor-pointer font-bold"
          >
            [Link to Articles]
          </h5>
          <ul className="mb-3 text-neutral-500 dark:text-neutral-300">
            <li>
              {" "}
              Started my tech blog on Hashnode. Write articles about MERN Stack
              Development along with NextJs and Typescript
            </li>
            <li>
              {" "}
              Also write articles on Data Structures and Algorithms Problem
              Solving using Java Programming Language
            </li>
          </ul>
        </div>
      </li>
      {/* <!--Second item--> */}
      <li>
        <div className="flex-start flex items-center pt-2">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            February 2024
          </p>
        </div>
        <div className="mb-6 ml-4 mt-2">
          <h4 className="mb-1.5 text-xl font-semibold">Eduhacks Hackathon</h4>
          <h5
            onClick={() =>
              window.open(
                "https://devpost.com/software/task-flow?ref_content=user-portfolio&ref_feature=in_progress"
              )
            }
            className="mb-3 text-neutral-500 dark:text-neutral-300 underline text-lg cursor-pointer font-bold"
          >
            [Link to Hackathon Project]
          </h5>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            Built a Real-Time Task Manager addresses the challenge of fragmented
            communication and organization in collaborative projects. <br />
            By offering a centralized platform with real-time updates and
            intuitive task management features, it streamlines project
            coordination, enhances team collaboration, and boosts overall
            productivity.
          </p>
        </div>
      </li>
      {/* <!--Third item--> */}
      <li>
        <div className="flex-start flex items-center pt-2">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            March 2024
          </p>
        </div>
        <div className="ml-4 mt-2 pb-5">
          <h4 className="mb-1.5 text-xl font-semibold">
            Zero to One Hackathon By Convex
          </h4>
          <h5
            onClick={() =>
              window.open(
                "https://devpost.com/software/precision-board?ref_content=user-portfolio&ref_feature=in_progress"
              )
            }
            className="mb-3 text-neutral-500 dark:text-neutral-300 underline text-lg cursor-pointer font-bold"
          >
            [Link to Hackathon Project]
          </h5>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
            Built a project for Hackathon which serves as a dynamic digital
            board that leverages Next.js for server-side rendering and
            client-side interactivity, TypeScript for type safety, ConvexDB for
            data storage and retrieval, and Zustand for state management. Users
            can create, edit, and organize digital boards with ease.
          </p>
        </div>
      </li>
    </ol>
  );
}
