"use client";

import Link from "next/link";
import Image from "next/image";
import heroImage from "public/media/hero-img.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BottomSheet } from "react-spring-bottom-sheet";
import { MapForm } from "../Forms/CreateMap/Form";

export default function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const onDismiss = () => {
    setBottomSheetOpen(false);
  };

  return (
    <section
      className="md:flex flex-row justify-between
      gap-8 lg:gap-20 xl:gap-20 2xl:gap-24 
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
      my-8 xl:my-14 2xl:my-16"
    >
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

        {!isLoggedIn && (
          <Button
            className="w-fit text-white font-normal tracking-wide
                        lg:px-6 xl:px-8 2xl:px-10
                        lg:py-6 xl:py-7 2xl:py-8
                        lg:text-lg 2xl:text-xl"
          >
            <Link href="/sign-up">Get started</Link>
          </Button>
        )}

        {isLoggedIn && (
          <>
            <Button
              onClick={() => setBottomSheetOpen(true)}
              className="w-fit text-white font-normal tracking-wide
                        lg:px-6 xl:px-8 2xl:px-10
                        lg:py-6 xl:py-7 2xl:py-8
                        lg:text-lg 2xl:text-xl"
            >
              Create a map
            </Button>
            <BottomSheet
              open={bottomSheetOpen}
              onDismiss={onDismiss}
              snapPoints={({ maxHeight }) => maxHeight * 0.95}
            >
              <MapForm style="" onDismiss={onDismiss} />
            </BottomSheet>
          </>
        )}
      </section>

      {/* Hero Image */}
      <figure className="hidden md:block w-full bg-cover">
        <Image
          src={heroImage}
          priority={true}
          alt="Hero"
          className="object-cover w-full h-full"
        ></Image>
      </figure>
    </section>
  );
}

