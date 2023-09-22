"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import userDefault from "../../../public/media/user-default.svg";

type Props = {
  imageUrl: StaticImageData | "";
  size?: string;
  style?: string;
};

export const UserProfileImage: React.FC<Props> = ({
  imageUrl,
  size = "w-9 h-9",
  style,
}) => {
  const profileImageClasses = `rounded-full ${size} ${style || ""}`;

  const [userId, setUserId] = useState("111");
  const [profileImageUrl, setUserImageUrl] = useState(userDefault);

  // useEffect(() => {
  //   setUserImageUrl(imageUrl);
  //   return () => {
  //     profileImageUrl;
  //   };
  // }, [profileImageUrl]);
  //

  return (
    <Link href={`/users/${userId}/maps`} passHref>
      <Image
        src={profileImageUrl}
        alt="Profile"
        priority={true}
        className={profileImageClasses}
      ></Image>
    </Link>
  );
};

export default UserProfileImage;
