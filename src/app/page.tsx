import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import FeaturedMaps from "@/components/FeaturedMaps/FeaturedMaps";
import MapFeedContainer from "@/components/MapFeedContainer/MapFeedContainer";
import Features from "@/components/Features/Features";
import MapStyles from "@/components/MapStyles/MapStyles";
import JoinCTA from "@/components/JoinCTA/JoinCTA";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

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
