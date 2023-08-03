"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Selector: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState("Dummy Map");

  const handleDropDown = () => {};

  return (
    <div className="w-full flex justify-between bg-primary px-3 py-2">
      <div className="invisible flex justify-center items-center gap-2">
        {/* exists for positioning purpose */}
        <Switch />
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="flex justify-center items-center gap-2 text-white">
        <h3 className="font-dm-sans font-medium tracking-wide text-sm text-center">
          {selectedMap}
        </h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-3"
          onClick={handleDropDown}
        />
      </div>

      <div className="flex justify-center items-center gap-2">
        <Switch />
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </div>
    </div>
  );
};

export default Selector;
