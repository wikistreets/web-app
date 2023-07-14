"use client";

import UserPic from "../../Profile/UserPic";
import UserInfo from "../../Profile/UserInfo";

export default function Profile() {
  return (
    <section className="flex w-full justify-between items-center">
      <div className="w-9 h-9">
        <UserPic />
      </div>
      <UserInfo />
    </section>
  );
}
