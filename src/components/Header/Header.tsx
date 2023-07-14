"use client";

import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import UserPic from "../Profile/UserPic";
import Hamburger from "./Hamburger/Hamburger";
import Notification from "./Hamburger/Notification";

import { useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(null);
  const handleNotification = () => {
    console.log("notification clicked");
  };

  return (
    <header>
      <nav
        className="Header w-full h-fit inline-flex items-center bg-white
        px-4 sm:px-6 lg:px-14 xl:px-16
        mt-4 sm:mt-6 lg:mt-8 xl:mt-10"
      >
        <Link href="/">
          <div className="w-9 h-9 xl:w-12 xl:h-12">
            <Logo />
          </div>
        </Link>

        <Search />

        <Hamburger />

        {!isLoggedIn && (
          <Button className="hidden sm:block w-fit shrink-0 text-indigo-600 bg-secondary">
            <Link href="/login">Log in</Link>
          </Button>
        )}

        {isLoggedIn && (
          <div className="hidden sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-max sm:h-full">
            <div className="xl:w-5 xl:h-5">
              <Notification />
            </div>
            <div className="ml-4 w-9 h-9 xl:w-12 xl:h-12 shrink-0">
              <UserPic />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
