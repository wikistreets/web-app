"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Profile from "./HamburgerProfile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export const Hamburger: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-9 h-9 flex justify-center items-center">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4">
          {!isLoggedIn && (
            <>
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href="/login">Log in</Link>
              </DropdownMenuItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <DropdownMenuLabel>
                <Profile />
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <div className="flex justify-between items-center">
                <DropdownMenuItem>Notification</DropdownMenuItem>
                <FontAwesomeIcon icon={faBell} className="pr-2" size="sm" />
              </div>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </>
          )}
          <DropdownMenuSeparator />

          <Button className="text-white px-12">
            <Link href="/login">Create a new map</Link>
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Hamburger;
