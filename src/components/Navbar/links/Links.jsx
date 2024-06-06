"use clinet";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";
import Image from "next/image";

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

const Links = () => {
  const [open, setOpen] = useState(false);
  // Temporary
  const session = true;
  const isAdmin = true;
  return (
    <div className="">
      {/* modified to max-screen md */}
      <div className="flex justify-center gap-6 md:hidden">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="cursor-pointer p-3 bg-white text-black rounded-md">
              Logout
            </button>
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
