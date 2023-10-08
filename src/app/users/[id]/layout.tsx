import Header from "@/components/Header/Header";
import ProfileHeader from "@/components/Profile/Dashboard/ProfileHeader";
import Navigation from "@/components/Profile/Dashboard/Navigation";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import { Separator } from "@/components/ui/separator";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <ProfileHeader />
      <Separator />
      <Navigation />
      {children}
      <GetInTouch />
    </section>
  );
}
