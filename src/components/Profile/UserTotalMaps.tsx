"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";

export default function ProfileMapInfo() {
  const [userId, setUserId] = useState(null);
  const [mapNum, setMapNum] = useState(0);
  return (
    <div className="flex justify-start items-center w-full text-xs text-secondary font-normal">
      <FontAwesomeIcon icon={faMap} className="mr-1" />
      <h2>{mapNum}</h2>
    </div>
  );
}
