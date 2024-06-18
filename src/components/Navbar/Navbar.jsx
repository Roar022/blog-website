// "use client";

import React from "react";
import Links from "./links/Links";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex justify-between items-center py-5">
      <Link href="/" className="font-bold text-2xl ">
        Logo
      </Link>
      <div className="">
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
