"use client";

import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/ui/menubar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { PiPlusCircleBold, PiGearBold } from "react-icons/pi";

type ToolBarProps = {};

export const ToolBar: React.FC<ToolBarProps> = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const handleSearch = () => {
    console.log("search");
  };
  const handleShare = () => {
    console.log("Share");
  };
  const handleCreate = () => {
    console.log("Create map? post?");
  };
  const handleSettings = () => {};

  return (
    <Menubar className="flex gap-6 justify-center items-center bg-white w-full text-indigo-600 border-none">
      {/* SEARCH */}
      <MenubarMenu>
        <MenubarTrigger>
          <>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={handleSearch}
              className="lg:hidden"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={handleSearch}
              size="lg"
              className="hidden lg:block"
            />
          </>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Search</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {/* SHARE */}
      <MenubarMenu>
        <MenubarTrigger>
          <>
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              onClick={handleShare}
              className="lg:hidden"
            />
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              onClick={handleShare}
              size="lg"
              className="hidden lg:block"
            />
          </>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Instagram</MenubarItem>
              <MenubarItem>Threads</MenubarItem>
              <MenubarItem>Twitter</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Email</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Copy link
            {/* <MenubarShortcut>⌘T</MenubarShortcut> */}
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {/* CREATE */}
      <MenubarMenu>
        <MenubarTrigger>
          <>
            <PiPlusCircleBold
              size="1.1rem"
              onClick={handleCreate}
              className="lg:hidden"
            />
            <PiPlusCircleBold
              size="1.3rem"
              onClick={handleCreate}
              className="hidden lg:block"
            />
          </>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Copy map</MenubarItem>
          <MenubarItem>
            Create map
            {/* <MenubarShortcut>⌘M</MenubarShortcut> */}
          </MenubarItem>
          <MenubarItem>Create post</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {/* ADMIN FEATURES */}
      {isAdmin && (
        <>
          <MenubarMenu>
            <MenubarTrigger>
              <>
                <PiGearBold
                  size="1.1rem"
                  onClick={handleCreate}
                  className="lg:hidden"
                />
                <PiGearBold
                  size="1.3rem"
                  onClick={handleCreate}
                  className="hidden lg:block"
                />
              </>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Map settings</MenubarItem>
              <MenubarItem>Reorder posts</MenubarItem>
              <MenubarItem>Delete map</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </>
      )}
    </Menubar>
  );
};

export default ToolBar;
