"use client";

import { StaticImageData } from "next/image";
import UserPic from "@/components/Profile/UserPic";
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
      <div className="w-12">
        <UserPic userPicData={userPic} />
      </div>
      <Info username={username} posted={posted} mapTitle={mapTitle} />
      <Nav />
    </section>
  );
};

export default Header;
