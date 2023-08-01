"use client";

import UserPic from "../../Profile/UserPic";
import UserInfo from "../../Profile/UserInfo";
import userDefault from "../../../../public/media/user-default.svg";

export default function Profile() {
  return (
    <section className="flex w-full justify-between items-center">
      <div className="w-9 h-9">
        <UserPic userPic={userDefault} />
      </div>
      <UserInfo />
    </section>
  );
}
