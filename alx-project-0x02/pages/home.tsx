import React from "react";
import Card from "@/components/common/Card";
import { type CardProps } from "@/interfaces";

const Home: React.FC = () => {
  const cards: CardProps[] = [
    { title: "First Card", content: "This is the content of the first card." },
    {
      title: "Second Card",
      content: "Here is the content of the second card.",
    },
    {
      title: "Third Card",
      content: "And this is the content of the third card.",
    },
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default Home;
