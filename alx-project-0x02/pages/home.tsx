import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { type CardProps } from "@/interfaces";

const Home: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([
    { title: "First Card", content: "This is the content of the first card." },
    {
      title: "Second Card",
      content: "Here is the content of the second card.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: CardProps) => {
    setCards((prev) => [...prev, post]);
  };

  return (
    <>
      <Header />
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Add New Post
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </>
  );
};

export default Home;
