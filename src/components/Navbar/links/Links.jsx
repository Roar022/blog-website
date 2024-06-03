import Link from "next/link";
import React from "react";
import NavLink from "./navLink/NavLink";
const Links = () => {
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
  // Temporary
  const session = true;
  const isAdmin = false;
  return (
    <div className="flex justify-center gap-6">
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button>Logout</button>
        </>
      ) : (
        <>
          <NavLink item={{ title: "Login", path: "/login" }} />
        </>
      )}
    </div>
  );
};

export default Links;
