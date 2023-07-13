"use client";

import UserPic from "../../Profile/UserPic";
import UserInfo from "../../Profile/UserInfo";

export default function Profile() {
  return (
    <section className="flex w-full justify-between items-center">
      <UserPic />
      <UserInfo />
    </section>
  );
}
