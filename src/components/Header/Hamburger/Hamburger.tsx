"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../../ui/button";
import Notification from "./Notification";
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

const Hamburger: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-9 h-9 flex justify-center items-center">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2.5">
          {isLoggedIn && (
            <>
              <DropdownMenuLabel>
                <Profile />
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <div className="flex justify-between items-center">
                <DropdownMenuItem>Notification</DropdownMenuItem>
                <DropdownMenuItem>
                  <Notification />
                </DropdownMenuItem>
              </div>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link href="/">
                <DropdownMenuItem>Home</DropdownMenuItem>
              </Link>
              <Link href="/login">
                <DropdownMenuItem>Log in</DropdownMenuItem>
              </Link>
            </>
          )}
          <DropdownMenuSeparator />
          <Link href="/login">
            <Button className="text-white px-12">Create a new map</Button>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Hamburger;
