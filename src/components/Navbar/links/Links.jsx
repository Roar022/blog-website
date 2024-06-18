"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({session}) => {
  const [open, setOpen] = useState(false);
  // Temporary
  // console.log("in links ",session);
  // const session = true;
  const isAdmin = true;
  return (
    <div className="">
      {/* modified to max-screen md */}
      <div className="flex justify-center gap-6 md:hidden">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session && session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="cursor-pointer p-3 bg-white text-black rounded-md">
                Logout
              </button>
            </form>
          </>
        ) : (
          <>
            <NavLink item={{ title: "Login", path: "/login" }} />
          </>
        )}
      </div>
      {/* min-screen md */}
      <div className="tablet:hidden">
        <Image
          src="/menu.png"
          alt=""
          height={30}
          width={30}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
      {open && (
        <div className="p-4 gap-3 z-50 fixed bg-regal-blue items-center justify-center overflow-auto rounded-2xl right-0 w-1/2 h-4/5 flex-col flex">
          {/* <div className={styles.mobileLinks}> */}
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
