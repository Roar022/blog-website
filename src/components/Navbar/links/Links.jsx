"use clinet";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";

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
      <button className="tablet:hidden cursor-pointer p-3 bg-white text-black rounded-md" onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (

        <div className="p-4 tablet:hidden bg-emerald-700 absolute right-0 w-1/2 h-5/6 flex-col text-center overflow-hidden top-30 justify-items-center flex">
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
