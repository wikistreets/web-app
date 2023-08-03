"use cleint";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Nav: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMyPost, setIsMyPost] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-fit h-9 flex justify-center items-center">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2.5">
          {/* TODO: clarify logic */}
          {!isLoggedIn && (
            <>
              <DropdownMenuItem>Share</DropdownMenuItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <DropdownMenuItem>Save</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Nav;
