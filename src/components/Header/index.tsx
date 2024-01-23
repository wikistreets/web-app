"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { BottomSheet } from "react-spring-bottom-sheet";
import { Logo } from "@/components/Logo";
import { HamburgerNav } from "./Hamburger";
import { Notification } from "./Hamburger/Notification";
import { UserProfileImage } from "../Profile/UserProfileImage";
import { SearchInput } from "../SearchInput";

interface BottomSheetState {
  search: boolean;
  menu: boolean;
}

export const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(null);

  const [bottomSheetOpen, setBottomSheetOpen] = useState<BottomSheetState>({
    search: false,
    menu: false,
  });

  const handleBottomSheetToggle = (sheetName: keyof BottomSheetState) => {
    setBottomSheetOpen((prevState) => ({
      ...prevState,
      [sheetName]: !prevState[sheetName],
    }));
  };

  const onDismiss = () => {
    setBottomSheetOpen({
      search: false,
      menu: false,
    });
  };

  const handleNotification = () => {
    console.log("notification clicked");
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

        {/* Search */}
        <button
          onClick={() => handleBottomSheetToggle("search")}
          className="flex w-full h-full items-center justify-center sm:justify-start mx-4"
        >
          <FontAwesomeIcon
            icon={faSearch}
            size="sm"
            style={{ color: "#9CA3AF" }}
            className="mr-2"
          />
          <h6 className="text-secondary">Search</h6>
        </button>
        <BottomSheet
          open={bottomSheetOpen["search"]}
          onDismiss={onDismiss}
          snapPoints={({ maxHeight }) => maxHeight * 0.95}
        >
          <SearchInput></SearchInput>
        </BottomSheet>

        {/* Hamburger Menu */}
        <button
          onClick={() => handleBottomSheetToggle("menu")}
          className="sm:hidden"
        >
          <FontAwesomeIcon icon={faBars} size="lg" className="" />
        </button>
        <BottomSheet
          open={bottomSheetOpen["menu"]}
          onDismiss={onDismiss}
          snapPoints={({ maxHeight }) => maxHeight * 0.95}
        >
          <HamburgerNav />
        </BottomSheet>

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