import React from "react";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800">Posts Page</h1>
        <p className="mt-4 text-gray-600">
          This is where posts will be displayed.
        </p>
      </div>
    </>
  );
};

export default Posts;
