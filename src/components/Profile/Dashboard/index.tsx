import UserProfileImage from "../UserProfileImage";
import UserName from "../UserName";
import EditProfileButton from "../EditProfileBtn";
import UserTotalMaps from "../UserTotalMaps";
import UserBio from "../UserBio";

export const DashboardProfileHeader = () => {
  return (
    <header
      className="flex flex-col 
        gap-4 sm:gap-6 w-full 
        px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
        my-6 sm:my-8 lg:my-10 xl:my-12"
    >
      {/* < sm */}
      <section className="flex w-full gap-4 justify-start items-center">
        <UserProfileImage
          imageUrl={""}
          size="w-16 h-16 sm:w-20 sm:h-20"
          style="shrink-0"
        />

        <section className="flex flex-col gap-2 justify-start items-center">
          <div className="flex gap-2">
            <UserName userNameData={"foo.barstein"} />
            <EditProfileButton />
          </div>
          <UserTotalMaps style="flex justify-start items-center gap-1 text-secondary font-normal text-sm" />
        </section>
      </section>

      <UserBio
        userBioData={""}
        size="text-xs"
        style="text-secondary text-left"
      />

      {/* sm, md, ... */}
      {/* <section className="hidden sm:flex w-full gap-4 justify-start items-center">
        <UserProfileImage imageUrl={""} size="w-28 h-28" style="" />

        <section className="flex flex-col gap-2 justify-center items-start">
          <div className="flex gap-2">
            <UserName userNameData={"foo.barstein"} />
            <EditProfileButton />
          </div>
          <UserBio
            userBioData={""}
            size="text-sm"
            style="text-secondary text-left"
          />
          <UserTotalMaps style="flex justify-start items-center gap-1 text-secondary font-normal text-sm" />
        </section>
      </section> */}
    </header>
  );
};
