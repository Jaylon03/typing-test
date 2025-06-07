'use client'
import { ThemeToggle } from "../../components/ThemeToggle";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <ThemeToggle/>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        <p className="text-gray-600">Start bringing your app here.</p>
      </main>
    </div>
  );
}