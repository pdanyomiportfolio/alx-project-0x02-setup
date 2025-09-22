import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="border rounded-xl p-6 shadow-md bg-white hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <span className="text-sm text-gray-500">Posted by User {userId}</span>
    </div>
  );
};

export default PostCard;
