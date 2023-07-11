"use client";

import UserPic from "../../Profile/UserPic";
import UserInfo from "../../Profile/UserInfo";
import Notification from "./Notification";

export default function Profile() {
  return (
    <div className="flex w-full justify-between items-center">
      <UserPic />
      <UserInfo />
      <Notification />
    </div>
  );
}
