'use client'
import { ThemeToggle } from "../../components/ThemeToggle";
import React from "react";
import TypingTest from "../../components/TypingTest";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]"> 
      <ThemeToggle/>

      <main className="flex flex-col items-center justify-center min-h-screen">
      
      <TypingTest/>
      </main>
    </div>
  );
}