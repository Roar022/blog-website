import React from "react";
const SingleUserData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  return res.json();
};
const PostUser = async ({userId}) => {
    // console.log(id);
    const data = await SingleUserData(userId);
    // console.log(object);
  return (
    <div className="flex w-auto flex-col">
      <span className="text-gray-500 font-bold">Author</span>
      <span className="text-lg font-bold">{data.name}</span>
    </div>
  );
};


export default PostUser;
