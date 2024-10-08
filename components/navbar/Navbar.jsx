"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import style from "./page.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const linksRef = useRef(null); // Create a ref for the links menu

  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Portfolio", path: "/portfolio" },
    { id: 3, name: "MyBlogs", path: "/blog" },
    { id: 5, name: "About", path: "/about" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (linksRef.current && !linksRef.current.contains(event.target) && !event.target.closest(`.${style.hamburger}`)) {
        setIsOpen(false); // Close the menu
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={style.container}>
        <div className={style.logo_toggle}> 

        <Link href="/" className={style.logo}>
          Next-Connect
        </Link>

        <DarkModeToggle />
        </div>

        <div className={`${style.links} ${isOpen ? style.open : ""}`} ref={linksRef} >
          {links.map((link) => (
            <Link
              className={style.link}
              
              key={link.id}
              href={link.path}
              onClick={closeMenu} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
          {/* Authentication handling */}
          {session.status === "authenticated" && (
            <button className={style.logout} onClick={signOut}>
              Logout
            </button>
          )}
        </div>

        <div className={style.hamburger} onClick={toggleMenu}>
          <div className={`${style.bar} ${isOpen ? style.barOpen : ""}`}></div>
          <div className={`${style.bar} ${isOpen ? style.barOpen : ""}`}></div>
          <div className={`${style.bar} ${isOpen ? style.barOpen : ""}`}></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
