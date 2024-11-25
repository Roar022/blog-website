import PostUser from "@/components/PostUser/PostUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import React, { Suspense } from "react";
const SinglePostData = async (slug) => {
  try {
    const res = await fetch(`https://blog-website-five-taupe.vercel.app/api/blog/${slug}`);
    if (!res.ok) {
      console.error(`Error: ${res.status} - ${res.statusText}`);
      if (res.status === 404) {
        throw new Error("Post not found");
      } else {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
    }
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Something went wrong");
  }
};

// const SingleUserData = async ({slug}) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went Wrong");
//   }
//   return res.json();
// };

const SinglePost = async ({ params }) => {
  const {slug} = params
  // console.log(params);
  // const post = await getPost(params);
  const post = await SinglePostData(slug);
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex gap-24 w-11/12 items-center justify-center ">
      <div className="relative md:hidden flex-1 h-96 bg-blue-200">
        <Image src={post.img ||"/about.png"} fill className="object-contain w-2/5" />
      </div>

      <div className="flex-2 flex-col md:w-3/4 flex gap-5">
        <h1 className="font-bold text-4xl">{post.title}</h1>

        <div className="flex items-start gap-10">
          <Image
            src={post.img ||"/about.png"}
            width={50}
            height={50}
            className="object-cover rounded-full "
          />
          {/* <div className="flex w-1/5 flex-col">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="text-lg font-bold">Jerry</span>
          </div> */}
          {/* <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post.userId} />
          </Suspense> */}
          <div className=" w-1/5 flex flex-col">
            <span className="text-gray-500 font-bold">Published</span>
            <span className="text-lg font-bold">{formattedDate}</span>
          </div>
        </div>
        <div>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePost;
