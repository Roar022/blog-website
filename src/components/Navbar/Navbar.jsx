"use client";

import React from "react";
import Links from "./links/Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
      <Link href="/" className="font-bold text-2xl ">Logo</Link>
      <div className="" >
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
