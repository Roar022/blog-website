// "use client";

import React from "react";
import Links from "./links/Links";
import Link from "next/link";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex justify-between items-center py-5">
      <Link href="/" className="font-bold text-2xl w-10 ">
      <div className="relative w-20 h-20"> {/* Set the width and height for the logo */}
          <Image
            src="/Logo.jpg" // Use the image URL from the post or a default image
            alt="Logo"
            layout="fill"
            className="object-contain rounded-full" // Maintain aspect ratio
          />
        </div>
      </Link>
      <div className="">
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
