import UserProfileImage from "../UserProfileImage";
import UserName from "../UserName";
import EditProfileButton from "../EditProfileBtn";
import UserTotalMaps from "../UserTotalMaps";
import UserBio from "../UserBio";
type Props = {};

export const ProfileHeader = (props: Props) => {
  return (
    <header
      className="flex flex-col gap-2 w-full items-center 
        px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
        my-4 sm:my-6 lg:my-8 xl:my-10"
    >
      <section className="flex w-full gap-4 justify-start items-center">
        <UserProfileImage imageUrl={""} size="w-16 h-16" style="" />

        <section className="flex flex-col gap-2 justify-start items-center">
          <div className="flex gap-2">
            <UserName userNameData={"foo.barstein"} />
            <EditProfileButton />
          </div>
          <UserTotalMaps style="flex justify-start items-center gap-1 text-secondary font-normal text-sm" />
        </section>
      </section>

      <UserBio userBioData={""} size="text-sm" style="text-secondary" />
    </header>
  );
};

export default ProfileHeader;
