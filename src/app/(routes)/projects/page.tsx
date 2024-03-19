import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsPage() {
  const projectsList = [
    {
      name: "Notable",
      description:
        "A Notion Clone with AI auto-complete feature and auto image generation based on note title. Tech Stack: NextJS Typescrpt Drizzle ORM Open AI",
      link: "https://notable-ten.vercel.app/",
      image: "/projects/1.png",
      github: "https://github.com/abhinavkr2108/notable",
      category: "NEXT-JS",
    },
    {
      name: "Precision Board",
      description:
        "Serves as a dynamic digital board that leverages Next.js for server-side rendering and client-side interactivity, TypeScript for type safety, ConvexDB for data storage and retrieval, and Zustand for state management. Users can create, edit, and organize digital boards with ease.",
      link: "https://precision-board.vercel.app/",
      image: "/projects/2.png",
      github: "https://github.com/abhinavkr2108/precision-board",
      category: "NEXT-JS",
    },
    {
      name: "Tasks Flow",
      description:
        "Trello Clone made using NextJS Typescript and Liveblocks. it streamlines project coordination, enhances team collaboration, and boosts overall productivity. This solution eliminates the need for multiple communication channels",
      link: "https://tasks-flow.vercel.app/",
      image: "/projects/3.png",
      github: "https://github.com/abhinavkr2108/tasks-flow",
      category: "NEXT-JS",
    },
    {
      name: "Urban Nest",
      description: `Urban Nest is a platform that connects buyers and sellers of properties. Our mission is to provide a seamless and efficient way to connect buyers and sellers of properties.
       Features
       
           Browse Listings
           Create Listings
           Filter and search Listings
       `,
      link: "https://urban-nest-i6gf.onrender.com/",
      image: "/projects/4.png",
      github: "https://github.com/abhinavkr2108/urban-nest",
      category: "VITE REACT",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <h3 className="text-gray-500 py-10 text-center text-3xl font-semibold sm:text-4xl">
        My Projects
      </h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
        {projectsList.map((project, idx) => (
          <Card key={idx}>
            <CardContent>
              <div className="mt-6">
                <Image
                  src={project.image}
                  alt="Project Image"
                  width={500}
                  height={300}
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="bg-indigo-800 w-fit px-3 py-2 rounded-md block text-white text-base font-semibold mt-3">
                {project.category}
              </div>
              <div className="mt-5">
                <CardTitle>{project.name}</CardTitle>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="space-x-3">
              <Link href={project.link}>
                <Button>View Project</Button>
              </Link>
              <Link href={project.github}>
                <Button variant={"outline"}>View Code</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
