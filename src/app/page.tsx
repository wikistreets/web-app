import Hero from "@/components/Hero/Hero";
import FeaturedMaps from "@/components/FeaturedMaps/FeaturedMaps";
import Feed from "@/components/Feed/Feed";
import Features from "@/components/Features/Features";
import MapStyles from "@/components/MapStyles/MapStyles";
import JoinCTA from "@/components/JoinCTA/JoinCTA";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

// Recommended Nesting Pattern: Passing Server Components to Client Components as Props

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMaps />
      <Feed />
      <Features />
      <MapStyles />
      <JoinCTA />
      <GetInTouch />
    </>
  );
}
