"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import SelectorContent from "./SelectorContent";

export const Selector: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState("Dummy Map");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownContent = isDropdownOpen ? <SelectorContent /> : null;

  return (
    <>
      <div
        className="w-full flex justify-center bg-primary px-3 py-2"
        onClick={toggleDropdown}
      >
        {/* exists for positioning purpose */}
        {/* <div className="invisible flex justify-center items-center gap-2">
          <Switch />
          <FontAwesomeIcon icon={faBars} />
        </div> */}

        <div className="flex justify-center items-center gap-2 text-white">
          <FontAwesomeIcon
            icon={isDropdownOpen ? faChevronUp : faChevronDown}
            className="invisible w-3"
            onClick={toggleDropdown}
          />
          {/* for centering purposes only */}

          <h3 className="font-dm-sans font-medium tracking-wide text-xs sm:text-sm text-center">
            {selectedMap}
          </h3>

          <FontAwesomeIcon
            icon={isDropdownOpen ? faChevronUp : faChevronDown}
            className="w-3"
          />
        </div>

        {/* <div className="flex justify-center items-center gap-2">
          <Switch />
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </div> */}
      </div>
      {dropdownContent}
    </>
  );
};

export default Selector;
