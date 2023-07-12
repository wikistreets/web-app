"use client";

import Hero from "@/components/Landing/Hero/Hero";
import FeaturedMaps from "@/components/Landing/FeaturedMaps/FeaturedMaps";
import GetInTouch from "@/components/Landing/GetInTouch/GetInTouch";

// Recommended Nesting Pattern: Passing Server Components to Client Components as Props

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedMaps />
      <GetInTouch />
    </div>
  );
}
