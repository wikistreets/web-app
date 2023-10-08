"use client";

import { useState } from "react";
import Link from "next/link";
import NavigationFocus from "./NavigationFocus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSort } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
  const userId: string = "111";
  const [activeMenu, setActiveMenu] = useState("Maps");

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
  };

  return (
    <>
      <nav
        className="bg-white flex items-center w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
        my-4 text-secondary"
      >
        <ul className="flex justify-between items-center text-xs lg:text-sm w-full">
          <div className="flex space-x-4">
            <li onClick={() => handleMenuClick("Maps")}>
              <Link href={`/users/${userId}/maps`}>Maps</Link>
              {activeMenu === "Maps" && <NavigationFocus />}{" "}
            </li>
            <li onClick={() => handleMenuClick("Posts")}>
              <Link href={`/users/${userId}/posts`}>Posts</Link>
              {activeMenu === "Posts" && <NavigationFocus />}{" "}
            </li>
            <li onClick={() => handleMenuClick("Saved")}>
              <Link href={`/users/${userId}/saved`}>Saved</Link>
              {activeMenu === "Saved" && <NavigationFocus />}{" "}
            </li>
            <li onClick={() => handleMenuClick("Settings")}>
              <Link href={`/users/${userId}/settings`}>Settings</Link>
              {activeMenu === "Settings" && <NavigationFocus />}{" "}
            </li>
            <li className="my-auto">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
          </div>

          <li>
            <FontAwesomeIcon icon={faSort} className="h-4" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
