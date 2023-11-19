"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { HamburgerProfile } from "./Profile";
import { PopUpTrigger } from "@/components/PopUp/PopUpTrigger";
import { PopUpContainer } from "@/components/PopUp/PopUpContainer";
import { MapForm } from "@/components/Forms/CreateMap/Form";

export const HamburgerNav: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen((prevIsPopUpOpen) => !prevIsPopUpOpen);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  const popUpTriggerProps = {
    content: "Create a map",
    style: "text-white px-12 w-full",
  };

  const popUpContentProps = {
    isOpen: isPopUpOpen,
    onClose: closePopUp,
    content: (
      <MapForm
        onClose={closePopUp}
        style="sm:max-w-md md:max-w-md xl:max-w-lg"
      />
    ),
    style: "",
  };
  return (
    <>
      <nav>
        <ul className="space-y-6 mt-10 text-sm text-primary">
          {!isLoggedIn && (
            <>
              <li>
                {" "}
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/login">Log in</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <HamburgerProfile />
              <li>Profile</li>
              <div className="flex justify-between items-center">
                <li>Notification</li>
                <FontAwesomeIcon icon={faBell} />{" "}
              </div>
              <li>Settings</li>
              <li>Log out</li>
              <li>
                <PopUpTrigger onClick={togglePopUp} {...popUpTriggerProps} />
                <PopUpContainer {...popUpContentProps} />
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};
