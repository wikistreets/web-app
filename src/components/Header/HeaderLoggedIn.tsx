"use client";

import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import Hamburger from "./Hamburger";

export default function Header() {
  return (
    <nav className="w-full h-14 p-2.5 bg-white inline-flex items-center">
      <Logo />
      <Search />
      <Hamburger />
    </nav>
  );
}
