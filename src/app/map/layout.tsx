import Header from "@/components/Header/Header";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      {children}
      <GetInTouch />
    </section>
  );
}
