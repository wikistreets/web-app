"use client";

import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import UserLoggedOut from "./ProfileLoggedOut";

export default function Header() {
  return (
    <nav className="Header w-full h-14 p-2.5 bg-white inline-flex items-center">
      <Link href="/">
        <Logo />
      </Link>
      <Search />
      <UserLoggedOut />
    </nav>
  );
}
