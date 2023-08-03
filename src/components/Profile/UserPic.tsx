"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import userDefault from "../../../public/media/user-default.svg";

type Props = {
  userPicData: StaticImageData | "";
};

export const UserPic: React.FC<Props> = ({ userPicData }) => {
  const [userId, setUserId] = useState(null);
  const [userPic, setUserPic] = useState(userDefault);

  useEffect(() => {
    setUserPic(userPicData);
    return () => {
      userPic;
    };
  }, [userPic]);

  return (
    <Image
      src={userPic}
      alt="User"
      priority={true}
      className="flex shrink-0 grow w-full h-full rounded-full"
    ></Image>
  );
};

export default UserPic;
