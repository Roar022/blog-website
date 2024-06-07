import PostUser from "@/components/PostUser/PostUser";
import Image from "next/image";
import React, { Suspense } from "react";

const SinglePostData = async ({ slug }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  return res.json();
};
// const SingleUserData = async ({slug}) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went Wrong");
//   }
//   return res.json();
// };

const SinglePost = async ({ params }) => {
  // console.log(params);
  const post = await SinglePostData(params);
  return (
    <div className="flex gap-24 w-11/12 items-center justify-center ">
      <div className="relative md:hidden flex-1 h-96 bg-blue-200">
        <Image src="/about.png" fill className="object-contain w-2/5" />
      </div>

      <div className="flex-2 flex-col md:w-3/4 flex gap-5">
        <h1 className="font-bold text-4xl">{post.title}</h1>

        <div className="flex items-start gap-10">
          <Image
            src="/about.png"
            width={50}
            height={50}
            className="object-cover rounded-full "
          />
          {/* <div className="flex w-1/5 flex-col">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="text-lg font-bold">Jerry</span>
          </div> */}
          <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className=" w-1/5 flex flex-col">
            <span className="text-gray-500 font-bold">Published</span>
            <span className="text-lg font-bold">01.01.2003</span>
          </div>
        </div>
        <div>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePost;
