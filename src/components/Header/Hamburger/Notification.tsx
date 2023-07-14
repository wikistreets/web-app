"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function Notification() {
  const [userId, setUserId] = useState(null);
  const handleNotification = () => {
    console.log("notification clicked");
  };

  return (
    <FontAwesomeIcon
      icon={faBell}
      onClick={handleNotification}
      className="grow xl:w-full xl:h-full"
    />
  );
}
