"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";

type Props = {
  size?: string;
  style?: string;
};

export const UserTotalMaps: React.FC<Props> = ({ size = "w-full", style }) => {
  const UserTotalMapsClasses = `${size} ${style || ""}`;

  const [userId, setUserId] = useState(null);
  const [mapNum, setMapNum] = useState(0);

  return (
    <div className={UserTotalMapsClasses}>
      <FontAwesomeIcon icon={faMap} />
      <p>{mapNum}</p>
    </div>
  );
};

export default UserTotalMaps;