"use client";

import { useState, useEffect } from "react";

type Props = {
  userNameData: string;
  size?: string; // Optional size prop
  style?: string; // Additional styles
};

export const UserName: React.FC<Props> = ({ userNameData, size, style }) => {
  const UserNameClasses = `${size} ${style || ""}`;
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("foo.barstein");

  useEffect(() => {
    setUserName(userNameData);
    return () => {
      userName;
    };
  }, [userName]);

  return <p className={UserNameClasses}>{userName}</p>;
};

export default UserName;
