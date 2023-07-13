"use client";

import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import UserPic from "../Profile/UserPic";
import Hamburger from "./Hamburger/Hamburger";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
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
        px-4 sm:px-6 lg:px-14 
        mt-4 sm:mt-6 lg:mt-8"
      >
        <Link href="/">
          <Logo />
        </Link>
        <Search />

        <Hamburger />

        {!isLoggedIn && (
          <Button className="hidden sm:block w-fit shrink-0 text-indigo-600 bg-secondary">
            <Link href="/login">Log in</Link>
          </Button>
        )}

        {isLoggedIn && (
          <div className="hidden sm:flex-row sm:inline-flex sm:justify-center sm:items-center sm:w-fit sm:h-full">
            <FontAwesomeIcon icon={faBell} onClick={handleNotification} />
            <div className="ml-4">
              <UserPic />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
