"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSort } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export const Navigation: React.FC<Props> = ({}) => {
  return (
    <>
      <nav
        className="bg-white flex items-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
        my-4 sm:my-6 lg:my-8 xl:my-10 text-secondary"
      >
        <div className="container mx-auto">
          <ul className="flex justify-between text-sm">
            <div className="flex space-x-4 items-center">
              <li>
                <Link href="/">Maps</Link>
              </li>
              <li>
                <Link href="/">Posts</Link>
              </li>
              <li>
                <Link href="/">Saved</Link>
              </li>
              <li>
                <Link href="/">Settings</Link>
              </li>
              <li className="my-auto">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </li>
            </div>

            <li>
              <FontAwesomeIcon icon={faSort} className="h-4" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
