"use client";

import Link from "next/link";
import style from "./header.module.css";
import { usePathname } from "next/navigation";
import { AiOutlineCaretDown } from "react-icons/ai";

const Header = () => {
  let path = usePathname();
  return (
    <header className={style.container}>
      <h1 className={style.h1}>
        <AiOutlineCaretDown />
      </h1>
      <Link
        className={`${style.navItem} ${path == "/" ? style.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${style.navItem} ${path == "/posts" ? style.active : ""}`}
        href="/posts"
      >
        Posts
      </Link>
      <Link
        className={`${style.navItem} ${path == "/blog" ? style.active : ""}`}
        href="/blog"
      >
        Blog
      </Link>
      <Link
        className={`${style.navItem} ${path == "/aboutus" ? style.active : ""}`}
        href="/aboutus"
      >
        About Us
      </Link>
      <Link
        className={`${style.navItem} ${
          path == "/contactus" ? style.active : ""
        }`}
        href="/contactus"
      >
        Contact Us
      </Link>
      <Link
        className={`${style.navItem} ${path == "/login" ? style.active : ""}`}
        href="/login"
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
