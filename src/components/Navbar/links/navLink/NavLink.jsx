"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ item }) => {
  const pathname = usePathname();
  // console.log(pathname);
  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={`px-4 py-3  items-center justify-center ${
        isActive
          ? "bg-white text-black rounded-full"
          : "active:bg-white active:text-black active:rounded-full"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
