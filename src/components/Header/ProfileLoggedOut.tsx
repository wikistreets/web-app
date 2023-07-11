"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import defaultProfile from "../../../public/icons/user-default.svg";

export default function UserLoggedOut() {
  return (
    <div className="flex justify-center items-center w-12 h-9">
      <Link href="/login">
        <Image src={defaultProfile} alt="user default" />
        {/* <Button asChild className="text-white">
        <Link href="/login">Login</Link>
      </Button> */}
      </Link>
    </div>
  );
}
