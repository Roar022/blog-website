import { deletePost } from "@/lib/actions";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import React from "react";

const AdminPosts = async () => {
  const posts = await getPosts();
//   const deletePostWithId = async (id) => {
//     "use server"
//     return deletePost.bind(null, id);
//   };
  return (
    <div>
      <h1 className="text-2xl font-bold">Posts</h1>
      {posts &&
        posts.map((post) => (
          <div className="flex my-3 justify-between" key={post.id}>
            <div className="flex justify-between space-x-4" >
              <Image
                src={post.img || "/noavatar.png"}
                alt=""
                height={50}
                width={50}
                className="rounded-full"
              />
              <span className="content-center" >{post.title}</span>
            </div>
            {/* <form action={() => deletePostWithId(post.id)}> */}
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
              <button className="bg-red-800 px-2 py-1 rounded-md" >Delete</button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default AdminPosts;
