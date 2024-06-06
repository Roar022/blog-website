import Image from "next/image";
import React from "react";

const SinglePost = () => {
  return (
    <div className="flex gap-24 w-11/12 items-center justify-center ">
      <div className="relative md:hidden flex-1 h-96 bg-blue-200">
        <Image src="/about.png" fill className="object-contain w-2/5" />
      </div>

      <div className="flex-2 flex-col md:w-3/4 flex gap-5">
        <h1 className="font-bold text-4xl">Title</h1>

        <div className="flex items-start gap-10">
          <Image
            src="/about.png"
            width={50}
            height={50}
            className="object-cover rounded-full "
          />
          <div className="flex w-1/5 flex-col">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="text-lg font-bold">Jerry</span>
          </div>
          <div className=" w-1/5 flex flex-col">
            <span className="text-gray-500 font-bold">Published</span>
            <span className="text-lg font-bold">01.01.2003</span>
          </div>
        </div>
        <div>
          The flex-basis property specifies the initial size of the flex item
          before any space distribution happens. The initial value for this
          property is auto. If flex-basis is set to auto then to work out the
          initial size of the item the browser first checks if the main size of
          the item has an absolute size set. This would be the case if you had
          given your item a width of 200 pixels. In that case 200px would be the
          flex-basis for this item.
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
