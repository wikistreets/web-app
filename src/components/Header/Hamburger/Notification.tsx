"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Notification() {
  const [userId, setUserId] = useState(null);
  const handleNotification = () => {
    console.log("notification clicked");
  };

  return (
    <>
      <div onClick={handleNotification}>
        <FontAwesomeIcon icon={icon({ name: "bell", style: "regular" })} />
      </div>
    </>
  );
}
