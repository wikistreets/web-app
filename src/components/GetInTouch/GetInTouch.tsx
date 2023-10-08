import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const GetInTouch: React.FC = () => {
  const wikiEmail = "hello@wikistreets.io";
  const wikiGitHub = "github.com/wikistreets";

  return (
    <section
      className="flex flex-col sm:flex-row
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
      py-14
      gap-10 lg:gap-14 xl:gap-16"
    >
      {/* Section - 1 */}
      <section className="flex flex-col gap-3 lg:gap-6">
        <h2 className="font-dm-sans tracking-wide md:text-3xl lg:text-3xl">
          Get in touch
        </h2>
        <p className="text-secondary font-light text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>

        {/* Wiki Links */}
        <div className="flex flex-col w-full p-0 text-secondary font-light tracking-wide text-sm lg:text-base">
          <div className="flex flex-row justify-start items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2"
              style={{ color: "rgb(156 163 175)" }}
            />
            <p>{wikiEmail}</p> {/* TODO: direct to email */}
          </div>
          <div className="flex flex-row justify-start items-center">
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
      </section>

      {/* Section - 2 */}
      <section className="flex flex-col gap-3 lg:gap-6">
        <h2 className="font-dm-sans tracking-wide md:text-3xl lg:text-3xl">
          Wikistreets.io
        </h2>
        <p className="text-secondary font-light text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </section>
    </section>
  );
};

export default GetInTouch;
