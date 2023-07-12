"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideHeading1 } from "lucide-react";

export default function Hero() {
  return (
    <div className="px-2.5 py-10 flex flex-col gap-6 justify-center items-center text-center">
      <h3 className="font-dm-sans">Welcome to Wikistreets.io</h3>
      <h1 className="font-dm-sans capitalize tracking-wide leading-tight">
        The Collaborative
        <br />
        Map Maker
      </h1>
      <Link href="/sign-up">
        <Button className="text-white font-normal w-fit tracking-wide">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
