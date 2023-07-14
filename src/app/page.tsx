"use client";

import Hero from "@/components/Hero/Hero";
import FeaturedMaps from "@/components/FeaturedMaps/FeaturedMaps";
import JoinCTA from "@/components/JoinCTA/JoinCTA";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

// Recommended Nesting Pattern: Passing Server Components to Client Components as Props

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedMaps />
      <JoinCTA />
      <GetInTouch />
    </main>
  );
}