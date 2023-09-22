"use client";

import { useState, useEffect } from "react";

type Props = {
  userBioData?: string;
  size?: string;
  style?: string;
};

export const UserBio: React.FC<Props> = ({ userBioData, size, style }) => {
  const UserBioClasses = `${size} ${style || ""}`;
  const [userId, setUserId] = useState(null);
  const [userBio, setUserBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing eiusmod!"
  );

  //   useEffect(() => {
  //     setUserBio(userBioData);
  //     return () => {
  //       userBio;
  //     };
  //   }, [userBio]);

  return <p className={UserBioClasses}>{userBio}</p>;
};

export default UserBio;
