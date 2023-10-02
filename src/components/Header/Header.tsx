"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import UserProfileImage from "../Profile/UserProfileImage";
import Hamburger from "./Hamburger/Hamburger";
import Notification from "./Hamburger/Notification";

export const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(null);
  const handleNotification = () => {
    console.log("notification clicked");
  };

  return (
    <header>
      <nav
        className="bg-white w-full h-fit inline-flex items-center 
        px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
        mt-2 sm:mt-2 lg:mt-2 xl:mt-2"
      >
        <Link href="/">
          <div className="w-9 h-9 xl:w-12 xl:h-12">
            <Logo
              size="w-full h-full"
              style="flex justify-center items-center shrink-0 border border-slate-300 bg-white text-2xl"
            />
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
            <Notification size="xl:w-5 xl:h-5" />
            <UserProfileImage
              imageUrl=""
              size="ml-4 w-9 h-9 xl:w-12 xl:h-12 shrink-0"
              style={""}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
