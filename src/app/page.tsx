"use client";

import Header from "@/components/Header/Header";
import Hero from "@/components/Landing/Hero/Hero";

// Recommended Nesting Pattern: Passing Server Components to Client Components as Props

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
