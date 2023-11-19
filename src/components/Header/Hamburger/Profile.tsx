"use client";

import { useState } from "react";
import UserProfileImage from "@/components/Profile/UserProfileImage";
import userDefault from "../../../../public/media/user-default.svg";
import UserName from "@/components/Profile/UserName";
import UserTotalMaps from "@/components/Profile/UserTotalMaps";

export const HamburgerProfile: React.FC = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("foo.barstein");

  return (
    <section className="flex w-full justify-between items-center">
      <UserProfileImage imageUrl={userDefault} size="w-12 h-12" style={""} />
      <div className="flex flex-col justify-start w-full px-2">
        <UserName userNameData={userName} size="text-sm" style="font-medium" />
        <UserTotalMaps style="flex justify-start items-center text-sm text-secondary font-normal gap-1" />
      </div>
    </section>
  );
};
