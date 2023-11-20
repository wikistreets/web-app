import Header from "@/components/Header";
import GetInTouch from "@/components/GetInTouch";

export default function FooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
      <GetInTouch />
    </section>
  );
}
