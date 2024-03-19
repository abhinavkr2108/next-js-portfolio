"use client";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

interface DrawerProps {
  navigation: { title: string; path: string }[];
}
export default function Drawer({ navigation }: DrawerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Abhinav</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-2 mt-8 text-[20px] font-semibold">
          {navigation.map((item, index) => {
            return (
              <Link href={item.path} key={index}>
                <div key={item.path} className="hover:text-blue-500">
                  {item.title}
                </div>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
