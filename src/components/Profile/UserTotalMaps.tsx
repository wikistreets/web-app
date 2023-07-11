"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ProfileMapInfo() {
  const [userId, setUserId] = useState(null);
  const [mapNum, setMapNum] = useState(0);
  return (
    <div className="flex justify-start items-center w-full text-xs text-secondary font-normal">
      <FontAwesomeIcon
        icon={icon({ name: "map", style: "regular" })}
        className="mr-1"
      />
      <h2>{mapNum}</h2>
    </div>
  );
}
