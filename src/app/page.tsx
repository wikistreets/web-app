import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedMaps } from "@/components/FeaturedMaps";
import { MapFeedContainer } from "@/components/MapFeedContainer";
import { Features } from "@/components/Features";
import { MapStyles } from "@/components/MapStyles";
import { JoinCTA } from "@/components/JoinCTA";
import { GetInTouch } from "@/components/GetInTouch";

// Recommended Nesting Pattern: Passing Server Components to Client Components as Props

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full">
        <Hero />
        <FeaturedMaps />
        <MapFeedContainer style="my-6" />
        <Features />
        <MapStyles />
        <JoinCTA />
        <GetInTouch />
      </main>
    </>
  );
}
