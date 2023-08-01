"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import userDefault from "../../../public/media/user-default.svg";

type UserPicProps = {
  userPic: StaticImageData | "";
};

const UserPic = (props: UserPicProps) => {
  const [userId, setUserId] = useState(null);
  const [userPic, setUserPic] = useState(userDefault);

  useEffect(() => {
    setUserPic(props.userPic);
    return () => {
      userPic;
    };
  }, [props.userPic, userPic]);

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
