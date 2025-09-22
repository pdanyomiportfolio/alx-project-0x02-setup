import React from "react";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Welcome to ALX Project 2 🚀
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Your Next.js project with TypeScript and Tailwind CSS is up and
          running.
        </p>
      </main>
    </div>
  );
}
