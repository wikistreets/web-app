"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { PopUpTrigger } from "../PopUp/PopUpTrigger";
import { PopUpContainer } from "../PopUp/PopUpContainer";
import { HamburgerNav } from "./Hamburger/Nav";
import { Notification } from "./Hamburger/Notification";
import UserProfileImage from "../Profile/UserProfileImage";

export const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(null);

  const handleNotification = () => {
    console.log("notification clicked");
  };

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const hamburgerTriggerProps = {
    content: <FontAwesomeIcon icon={faBars} size="lg" />,
    style:
      "w-9 h-9 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden",
  };

  const togglePopUp = () => {
    setIsPopUpOpen((prevIsPopUpOpen) => !prevIsPopUpOpen);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  const hamburgerMenuProps = {
    isOpen: isPopUpOpen,
    onClose: closePopUp,
    content: <HamburgerNav />,
    style: "",
  };

  return (
    <header>
      <nav
        className="bg-white w-full h-fit inline-flex items-center 
        px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
        mt-4 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-8"
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

        <>
          <PopUpTrigger onClick={togglePopUp} {...hamburgerTriggerProps} />
          <PopUpContainer {...hamburgerMenuProps} />
        </>

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
