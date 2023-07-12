"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GetInTouch() {
  const wikiEmail = "hello@wikistreets.io";
  const wikiGitHub = "github.com/wikistreets";

  return (
    <div className="flex flex-col gap-10 px-4 py-14">
      {/* Section 1 */}
      <div className="flex flex-col gap-3">
        <h2 className="font-dm-sans tracking-wide">Get in touch</h2>
        <h6 className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </h6>

        {/* Wiki Links */}
        <div className="container w-full p-0 text-secondary font-light tracking-wide">
          {/* Email */}
          <div className="flex flex-row justify-start items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2"
              style={{ color: "rgb(156 163 175)" }}
            />
            <p>{wikiEmail}</p> {/* TODO: direct to email */}
          </div>
          {/* GitHub */}
          <div className="flex flex-row justify-start items-center ">
            <FontAwesomeIcon
              icon={faGithub}
              className="mr-2"
              style={{ color: "rgb(156 163 175)" }}
            />
            <Link href={`https://${wikiGitHub}`}>
              <p>{wikiGitHub}</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col gap-3">
        <h2 className="font-dm-sans tracking-wide">Wikistreets.io</h2>
        <h6 className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </h6>
      </div>
    </div>
  );
}
