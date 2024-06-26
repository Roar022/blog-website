import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex md:flex-col items-center gap-10">
      <div className="h-96 flex-1 relative md:h-36 md:w-full md:flex-2">
        <Image src="/contact.png" alt="" fill className="object-contain md:h-36" />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-3">
          <input
            className="p-4 rounded-md bg-cyan-900 text-white"
            type="text"
            placeholder="Name And Surname"
            name=""
          />
          <input
            className="p-4 rounded-md bg-cyan-900 text-white"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-4 rounded-md bg-cyan-900 text-white"
            type="text"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            className="p-4 rounded-md bg-cyan-900 text-white"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="p-4 bg-blue-800 rounded-lg font-bold">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
