"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../../ui/button";
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
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Hamburger() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-9 h-9 flex justify-center items-center">
          <FontAwesomeIcon icon={icon({ name: "bars" })} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2.5">
          <DropdownMenuLabel>
            <Profile />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
          <DropdownMenuSeparator />
          <Button className="text-white px-12">Create a new map</Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
