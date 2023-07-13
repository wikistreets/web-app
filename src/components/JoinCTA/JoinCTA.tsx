"use client";

import Link from "next/link";
import Image from "next/image";
import ctaImage from "../../../public/media/join-cta.png";
import { Button } from "@/components/ui/button";

export default function JoinCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-14 py-14 w-screen">
      <div className="grid md:grid-flow-col bg-indigo-700 rounded-lg">
        <section className="flex flex-col justify-center p-8 lg:p-14 xl:p-20">
          <h2 className="text-white xl:text-3xl 2xl:text-4xl">
            Ready to dive in?
          </h2>
          <h2 className="text-white xl:text-3xl 2xl:text-4xl mt-2 2xl:mt-4">
            Start creating today.
          </h2>
          <Link href="/sign-up">
            <Button
              className="bg-white text-indigo-700 w-fit 
              mt-6 lg:mt-8 2xl:mt-10
              2xl:px-8 2xl:py-6 2xl:text-lg"
            >
              Sign up for free
            </Button>
          </Link>
        </section>
        <figure
          className="flex justify-end items-center 
          md:pt-8 lg:pt-14 xl:pt-20
          pl-8 md:pl-12 lg:pl-28 xl:pl-52
          h-48 md:h-52 lg:h-72 xl:h-80 2xl:h-96"
        >
          <Image
            src={ctaImage}
            alt="Join Today"
            className="rounded-tl-md h-full object-cover object-top"
          ></Image>
        </figure>
      </div>
    </section>
  );
}
