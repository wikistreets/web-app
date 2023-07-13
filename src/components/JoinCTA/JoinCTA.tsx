"use client";

import Link from "next/link";
import Image from "next/image";
import ctaImage from "../../../public/media/join-cta.png";
import { Button } from "@/components/ui/button";

export default function JoinCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-14 py-14 w-screen">
      <section className="flex flex-col p-8 bg-indigo-700 rounded-t-lg">
        <h2 className="text-white">Ready to dive in?</h2>
        <h2 className="text-white">Start creating today.</h2>
        <Link href="/sign-up">
          <Button className="bg-white text-indigo-700 mt-8 w-fit">
            Sign up for free
          </Button>
        </Link>
      </section>
      <figure className="flex justify-end items-center pl-8 h-48 bg-indigo-700 rounded-b-lg">
        <Image
          src={ctaImage}
          alt="Join Today"
          className="rounded-tl-md h-full object-cover object-top"
        ></Image>
      </figure>
    </section>
  );
}
