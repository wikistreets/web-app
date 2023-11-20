import { Header } from "@/components/Header";
import { DashboardProfileHeader } from "@/components/Profile/Dashboard";
import Navigation from "@/components/Profile/Dashboard/Navigation";
import { GetInTouch } from "@/components/GetInTouch";
import { Separator } from "@/components/ui/separator";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <DashboardProfileHeader />
      <Separator />
      <Navigation />
      {children}
      <GetInTouch />
    </section>
  );
}
