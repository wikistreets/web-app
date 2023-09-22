"use client";

import { useState } from "react";
import UserProfileImage from "../../Profile/UserProfileImage";
import userDefault from "../../../../public/media/user-default.svg";
import UserName from "@/components/Profile/UserName";
import UserTotalMaps from "@/components/Profile/UserTotalMaps";

export const Profile: React.FC = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("foo.barstein");

  return (
    <section className="flex w-full justify-between items-center">
      <UserProfileImage imageUrl={userDefault} size="w-9 h-9" style={""} />
      <div className="flex flex-col justify-start w-full px-2">
        <UserName userNameData={userName} size="text-xs" style="font-medium" />
        <UserTotalMaps style="flex justify-start items-center text-xs text-secondary font-normal gap-1" />
      </div>
    </section>
  );
};

export default Profile;
