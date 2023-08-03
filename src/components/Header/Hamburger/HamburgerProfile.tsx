"use client";

import UserPic from "../../Profile/UserPic";
import UserInfo from "../../Profile/UserInfo";
import userDefault from "../../../../public/media/user-default.svg";

export const Profile: React.FC = () => {
  return (
    <section className="flex w-full justify-between items-center">
      <div className="w-9 h-9">
        <UserPic userPicData={userDefault} />
      </div>
      <UserInfo />
    </section>
  );
};

export default Profile;
