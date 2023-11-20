import Link from "next/link";
import { Logo } from "@/components/Header/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto px-4 bg-gray-100 text-secondary w-full py-12 flex flex-col gap-6 lg:gap-8 justify-center items-center">
      <Logo
        size="w-9 h-9 xl:w-12 xl:h-12"
        style="flex justify-center items-center shrink-0 border border-slate-300 bg-white text-2xl"
      />

      <div className="flex gap-4 text-center">
        <Link href="/tos">
          <h6 className="text-xs">Terms of Service</h6>
        </Link>
        <Link href="/about">
          <h6 className="text-xs">About</h6>
        </Link>
        <Link href="/privacy-policy">
          <h6 className="text-xs">Privacy Policy</h6>
        </Link>
      </div>

      <div className="flex gap-6 text-sm">
        <Link href="https://github.com/wikistreets">
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            style={{ color: "rgb(156 163 175)" }}
          />
        </Link>
        <FontAwesomeIcon
          icon={faInstagram}
          size="lg"
          style={{ color: "rgb(156 163 175)" }}
          // add link
        />
        <Link href="https://twitter.com/wikistreets_io">
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            style={{ color: "rgb(156 163 175)" }}
          />
        </Link>
      </div>

      <p className="font-light text-gray-400 text-center text-xs">
        <FontAwesomeIcon icon={faCopyright} className="mr-1" />
        2023 Plastic Past LLC. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
