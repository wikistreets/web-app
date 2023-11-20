import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FcGoogle } from "react-icons/fc";

export const SocialLogIn: React.FC = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button
        className="bg-white border border-solid border-slate-200 rounded-lg w-1/2 h-min
      flex"
      >
        <Link href="/" className="w-full">
          <FcGoogle className="mx-auto" size="1.2rem" />
        </Link>
      </Button>

      <Button className="bg-white border border-solid border-slate-200 rounded-lg w-1/2 h-min">
        <Link href="/" className="w-full">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Link>
      </Button>
    </div>
  );
};