"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "../../../../public/media/hero-img.png";

export default function Hero() {
  return (
    <div className="md:grid grid-cols-2">
      <div className="px-2.5 md:px-6 py-10 flex flex-col gap-6 justify-center items-center md:items-start text-center md:text-left">
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
      {/* Hero Image */}
      <div className="hidden md:block pr-6 py-10 bg-cover">
        <Image src={heroImage} priority={true} alt="Hero"></Image>
      </div>
    </div>
  );
}
