"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

type Props = {
  size?: string;
  style?: string;
};

export const Notification: React.FC<Props> = ({
  size = "grow xl:w-full xl:h-full",
  style,
}) => {
  const NotificationClasses = `${size} ${style || ""}`;

  const [userId, setUserId] = useState(null);
  const handleNotification = () => {
    console.log("notification clicked");
  };

  return (
    <FontAwesomeIcon
      icon={faBell}
      onClick={handleNotification}
      className={NotificationClasses}
    />
  );
};

export default Notification;