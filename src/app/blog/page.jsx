// "use client"
import PostCard from "@/components/PostCard/PostCard";
import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Something is Wrong");
  }
  // console.log(res.json());
  return res.json();
};
const Blog = async () => {
  const posts = await getData();
  return (
    <div className="tablet:grid-cols-2 laptop:grid-cols-3 lg:grid-cols-4 grid grid-cols-1">
      {posts && posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default Blog;
