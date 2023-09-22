"use client";

import { StaticImageData } from "next/image";
import UserProfileImage from "@/components/Profile/UserProfileImage";
import Info from "./Info";
import Nav from "./Nav";

type Props = {
  userPic: StaticImageData | "";
  username: string;
  posted: number;
  mapTitle: string;
};

export const Header: React.FC<Props> = ({
  userPic,
  username,
  posted,
  mapTitle,
}) => {
  return (
    <section className="bg-white flex w-full justify-center items-center gap-2 px-2 py-3">
      <UserProfileImage imageUrl={userPic} size="w-12" />
      <Info username={username} posted={posted} mapTitle={mapTitle} />
      <Nav />
    </section>
  );
};

export default Header;
