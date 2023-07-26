import Link from "next/link";
import { Button } from "../../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

type SocialLogInProps = {};

const SocialLogIn = (props: SocialLogInProps) => {
  return (
    <div className="flex flex-row gap-2">
      <Button className="bg-white border border-solid border-slate-200 rounded-lg w-1/2 h-min">
        <Link href="/" className="w-full">
          <FontAwesomeIcon icon={faGoogle} />{" "}
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

export default SocialLogIn;
