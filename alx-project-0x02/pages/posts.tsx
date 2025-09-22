import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Posts Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
