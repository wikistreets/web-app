"use client";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import SearchResult from "./SearchResult";

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [inputChanged, setInputChanged] = useState(false);
  const [enterPressed, setEnterPressed] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const searchResultRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputChanged(true);
    setQuery(e.target.value);
    setShowSearchResult(!!e.target.value); // Show SearchResult if there is input
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEnterPressed(true);
      performSearch();
    }
  };

  const performSearch = () => {
    // Do the actual search logic with the 'query' value
    console.log("Search query:", query);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      searchResultRef.current &&
      !searchResultRef.current.contains(event.target as Node)
    ) {
      setShowSearchResult(false);
    }
  };

  // Attach the click event listener directly to the document
  document.addEventListener("click", handleOutsideClick);

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div
          onClick={handleSearch}
          className="w-full h-full flex justify-start items-center
        px-4 my-2 border-solid border-b"
        >
          <FontAwesomeIcon
            icon={faSearch}
            size="sm"
            style={{ color: "#9CA3AF" }}
            className="mr-2"
          />
          <Input
            placeholder="Search"
            className="text-secondary border-none focus-visible:ring-transparent focus-visible:ring-offset-0"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        {showSearchResult && (inputChanged || enterPressed) ? (
          <div ref={searchResultRef}>
            <SearchResult />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchBar;
