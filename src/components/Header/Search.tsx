"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const handleSearch = () => {};

  return (
    <div
      onClick={handleSearch}
      className="flex w-full h-full items-center justify-center mx-4 sm:justify-start"
    >
      <FontAwesomeIcon
        icon={faSearch}
        size="sm"
        style={{ color: "#9CA3AF" }}
        className="mr-2"
      />
      <h6 className="text-secondary">Search</h6>
    </div>
  );
}
