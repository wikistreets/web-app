"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import userDefault from "../../../public/media/user-default.svg";

type UserPicProps = {
  userPic: StaticImageData;
};

const UserPic = (props: UserPicProps) => {
  const [userId, setUserId] = useState(null);
  const [userPic, setUserPic] = useState(userDefault);

  useEffect(() => {
    props.userPic ?? setUserPic(props.userPic);
    return () => {
      // cleanup code here...
    };
  }, [props.userPic]);

  return (
    <Image
      src={userPic}
      alt="User"
      priority={true}
      className="flex shrink-0 grow w-full h-full"
    ></Image>
  );
};

export default UserPic;