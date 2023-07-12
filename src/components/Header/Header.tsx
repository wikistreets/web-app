"use client";

import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import UserPic from "../Profile/UserPic";
import Hamburger from "./Hamburger/Hamburger";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(null);
  const handleNotification = () => {
    console.log("notification clicked");
  };

  return (
    <nav
      className="Header w-full h-fit inline-flex items-center bg-white
      px-4 sm:px-6 lg:px-14 
      mt-4 sm:mt-6 lg:mt-8"
    >
      <Link href="/">
        <Logo />
      </Link>
      <Search />

      {isLoggedIn ? (
        <Hamburger />
      ) : (
        <Link href="/login">
          <UserPic />
        </Link>
      )}

      {isLoggedIn && (
        <div className="hidden sm:flex-row sm:inline-flex sm:justify-center sm:items-center sm:w-fit sm:h-full">
          <div onClick={handleNotification}>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="ml-4">
            <UserPic />
          </div>
        </div>
      )}
    </nav>
  );
}
