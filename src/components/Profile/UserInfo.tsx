"use client";

import { useState } from "react";
import UserTotalMaps from "@/components/Profile/UserTotalMaps";

export default function UserInfo() {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("foo.barstein");
  const [mapNum, setMapNum] = useState(0);

  return (
    <div className="flex flex-col justify-start w-full px-2">
      <h2 className="text-xs">{userName}</h2>
      <UserTotalMaps />
    </div>
  );
}
