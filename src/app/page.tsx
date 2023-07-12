"use client";

import Hero from "@/components/Landing/Hero/Hero";
import FeaturedMaps from "@/components/Landing/FeaturedMaps/FeaturedMaps";

// Recommended Nesting Pattern: Passing Server Components to Client Components as Props

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedMaps />
    </div>
  );
}
