import PostCard from "@/components/PostCard/PostCard";
import React from "react";

const Blog = () => {
  return (
    <div className="tablet:grid-cols-2 laptop:grid-cols-3 lg:grid-cols-4 grid grid-cols-1">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Blog;
