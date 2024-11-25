// "use client"
import PostCard from "@/components/PostCard/PostCard";
// import { getPosts } from "@/lib/data";
import React from "react";

const getPosts = async () => {
  // const res = await fetch("http:/localhost:3000/api/blog");
  const res = await fetch("https://blog-website-five-taupe.vercel.app/api/blog");
  if (!res.ok) {
    throw new Error("Something is Wrong");
  }
  // console.log(res.json());
  return res.json();
};

const Blog = async () => {
  const posts = await getPosts();
  // const posts = await getPosts();
  return (
    <div className="tablet:grid-cols-2 laptop:grid-cols-3 lg:grid-cols-4 grid grid-cols-1">
      {posts && posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default Blog;
