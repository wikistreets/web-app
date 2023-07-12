"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import heroImage from "../../../../public/media/hero-img.png";

export default function Hero() {
  return (
    <div className="md:grid grid-cols-2">
      {/* Container */}
      <div
        className="container 
        px-2.5 md:px-6 lg:px-14 
        py-10
        flex flex-col gap-6 xl:gap-7 2xl:gap-10 justify-center  
        items-center md:items-start 
        text-center md:text-left"
      >
        <h3 className="font-dm-sans lg:text-xl xl:text-2xl">
          Welcome to Wikistreets.io
        </h3>

        <h1
          className="font-dm-sans capitalize tracking-wide 
            lg:text-4xl xl:text-5xl
            leading-tight lg:leading-snug xl:leading-snug"
        >
          The Collaborative
          <br />
          Map Maker
        </h1>

        <Link href="/sign-up">
          <Button
            className="text-white font-normal w-fit tracking-wide 
            xl:py-6 xl:text-lg"
          >
            Get Started
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <div
        className="hidden md:block 
        pr-6 lg:pr-14 py-10 bg-cover"
      >
        <Image
          src={heroImage}
          priority={true}
          alt="Hero"
          className="object-cover w-full h-full"
        ></Image>
      </div>
    </div> // end of grid
  );
}
