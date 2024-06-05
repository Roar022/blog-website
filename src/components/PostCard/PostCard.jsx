import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = () => {
  return (
    <div className=" bg-blue-950 m-4 flex flex-col p-4 gap-10">
      <div className="flex">
        <div className="relative w-4/5 h-72">
          <Image
            src="/contact.png"
            fill
            alt=""
            className=" w-11/12 object-cover"
          />
        </div>
        <span className="m-auto -rotate-90">01.01.2024</span>
      </div>
      <div className="flex-1 flex flex-col">
        <h1 className="font-bold text-2xl mb-5">Title</h1>
        <p className="text-gray-400 mb-5 w-11/12">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,{" "}
        </p>
        <Link href="/blog/post" className="font-bold underline" >Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
