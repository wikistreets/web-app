import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Header from "@/components/Header/Header";
import ProfileHeader from "@/components/Profile/Dashboard/ProfileHeader";
type Props = {};

export default function Users({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <ProfileHeader />
      <GetInTouch />
    </>
  );
}
