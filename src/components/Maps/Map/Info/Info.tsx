import Saved from "./Saved";
import Copied from "./Copied";
import Shared from "./Shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

type Props = { saved: number; copied: number; shared: number; style?: string };

export const Info: React.FC<Props> = ({ saved, copied, shared, style }) => {
  const InfoClasses = `${style || ""}`;
  return (
    <div className={InfoClasses}>
      <Saved saved={saved} />
      <FontAwesomeIcon icon={faCircle} className="w-0.5" />
      <Copied copied={copied} />
      <FontAwesomeIcon icon={faCircle} className="w-0.5" />
      <Shared shared={shared} />
    </div>
  );
};

export default Info;
