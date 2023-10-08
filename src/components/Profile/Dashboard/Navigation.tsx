import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSort } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
  const userId: string = "111";

  return (
    <>
      <nav
        className="bg-white flex items-center w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
        my-4 text-secondary"
      >
        <ul className="flex justify-between items-center text-xs lg:text-sm w-full">
          <div className="flex space-x-4">
            <li>
              <Link href={`/users/${userId}/maps`}>Maps</Link>
            </li>
            <li>
              <Link href={`/users/${userId}/posts`}>Posts</Link>
            </li>
            <li>
              <Link href={`/users/${userId}/saved`}>Saved</Link>
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
      </nav>
    </>
  );
};

export default Navigation;
