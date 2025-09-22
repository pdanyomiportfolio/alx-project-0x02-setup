import React from "react";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Our Featured Cards
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Card One"
          content="This is the first reusable card component."
        />
        <Card
          title="Card Two"
          content="Each card can have unique content passed as props."
        />
        <Card
          title="Card Three"
          content="You can use this Card component anywhere in the project."
        />
      </div>
    </div>
  );
}
