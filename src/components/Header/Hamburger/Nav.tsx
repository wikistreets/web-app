"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BottomSheet } from "react-spring-bottom-sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { HamburgerProfile } from "./Profile";
import { MapForm } from "@/components/Forms/CreateMap/Form";

export const HamburgerNav: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const onDismiss = () => {
    setBottomSheetOpen(false);
  };

  return (
    <>
      <nav className="p-4 h-full">
        <ul className="space-y-6 text-sm text-primary">
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
                <Button
                  onClick={() => setBottomSheetOpen(true)}
                  className="w-full text-white px-12"
                >
                  Create a map
                </Button>
                <BottomSheet
                  open={bottomSheetOpen}
                  onDismiss={onDismiss}
                  snapPoints={({ maxHeight }) => maxHeight * 0.95}
                >
                  <MapForm style="" onDismiss={onDismiss} />
                </BottomSheet>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};
