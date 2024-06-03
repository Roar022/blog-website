"use client";

import React from "react";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
      <div className="font-bold text-2xl px-10 ">Logo</div>
      <div className="px-10" >
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
