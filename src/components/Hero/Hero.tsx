"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import heroImage from "public/media/hero-img.png";

export const Hero: React.FC = () => {
  return (
    <section
      className="md:flex flex-row 
      justify-between
      gap-8 lg:gap-20 xl:gap-20 2xl:gap-24 
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
      pt-2 py-2 xl:py-14 2xl:py-16"
    >
      {/* Left Section */}
      <section
        className="flex flex-col justify-center 
        w-full md:w-fit 
        
        gap-6 lg:gap-8 xl:gap-12 2xl:gap-14  
        items-center md:items-start 
        text-center md:text-left"
      >
        <h3 className="font-dm-sans lg:text-xl xl:text-2xl">
          Welcome to Wikistreets.io
        </h3>

        <h1
          className="font-dm-sans capitalize tracking-wide w-max
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
            lg:px-6 xl:px-8 2xl:px-10
            lg:py-6 xl:py-7 2xl:py-8
            lg:text-lg 2xl:text-xl"
          >
            Get Started
          </Button>
        </Link>
      </section>

      {/* Hero Image */}
      <figure
        className="hidden md:block w-full 
        bg-cover"
      >
        <Image
          src={heroImage}
          priority={true}
          alt="Hero"
          className="object-cover w-full h-full"
        ></Image>
      </figure>
    </section>
  );
};

export default Hero;
