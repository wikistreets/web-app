"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Hamburger() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-9 h-9 flex justify-center items-center">
          <FontAwesomeIcon icon={icon({ name: "bars" })} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2.5">
          <DropdownMenuLabel>My Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
