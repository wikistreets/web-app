"use client";

import UserPic from "@/components/Profile/UserPic";
import Info from "./Info";
import Nav from "./Nav";

type HeaderProps = {
  userPic: string | "";
  username: string;
  posted: number;
  mapTitle: string;
};

const Header = (props: HeaderProps) => {
  return (
    <section className="flex flex-row w-full justify-center items-center gap-2 px-2 py-3">
      <div className="w-12">
        <UserPic userPic={props.userPic} />
      </div>
      <Info
        username={props.username}
        posted={props.posted}
        mapTitle={props.mapTitle}
      />
      <Nav />
    </section>
  );
};

export default Header;
