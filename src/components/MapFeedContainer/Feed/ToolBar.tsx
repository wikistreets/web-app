"use client";

import { useState, useContext, useEffect } from "react";
import { SearchContext } from "@/context/SearchContext";
import SearchBar from "@/components/Search/SearchBar";
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
import { BottomSheet } from "react-spring-bottom-sheet";
import { PostForm } from "@/components/Forms/CreatePost/Form";

export const ToolBar: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const { searchIsClicked, handleSearch } = useContext(SearchContext);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const onDismiss = () => {
    setBottomSheetOpen(false);
  };

  const handleShare = () => {
    console.log("Share");
  };

  const handleCreate = () => {
    console.log("Create map? post?");
  };

  const handleSettings = () => {};

  return (
    <>
      <Menubar className="flex gap-6 justify-center items-center bg-white w-full text-indigo-600 border-none">
        {/* SEARCH */}
        <MenubarMenu>
          <MenubarTrigger>
            <>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={() => handleSearch(searchIsClicked)}
                className="lg:hidden"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={() => handleSearch(searchIsClicked)}
                size="lg"
                className="hidden lg:block"
              />
            </>
          </MenubarTrigger>
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
            <MenubarItem>Add to Favorites</MenubarItem>
            <MenubarItem>Duplicate</MenubarItem>
            <MenubarSeparator />
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
            <MenubarItem>Copy link</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* CREATE */}
        <MenubarMenu>
          <MenubarTrigger onClick={() => setBottomSheetOpen(true)}>
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
          <BottomSheet
            open={bottomSheetOpen}
            onDismiss={onDismiss}
            snapPoints={({ maxHeight }) => maxHeight * 0.95}
          >
            <PostForm onDismiss={onDismiss} style="" />
          </BottomSheet>
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
                <MenubarItem>Invite collaborators</MenubarItem>
                <MenubarSeparator></MenubarSeparator>
                <MenubarItem>Import data</MenubarItem>
                <MenubarItem>Export data</MenubarItem>
                <MenubarSeparator></MenubarSeparator>
                <MenubarItem>Delete map</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </>
        )}
      </Menubar>
      {searchIsClicked && <SearchBar />}
    </>
  );
};

export default ToolBar;
