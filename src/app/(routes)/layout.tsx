import Header from "@/components/shared/Header";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {children}
      </div>
    </div>
  );
}
