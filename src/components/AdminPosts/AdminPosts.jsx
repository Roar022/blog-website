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
          <div key={post.id}>
            <div>
              <Image
                src={post.img || "/noavatar.png"}
                alt=""
                height={50}
                width={50}
              />
              <span>{post.title}</span>
            </div>
            {/* <form action={() => deletePostWithId(post.id)}> */}
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
              <button>Delete</button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default AdminPosts;
