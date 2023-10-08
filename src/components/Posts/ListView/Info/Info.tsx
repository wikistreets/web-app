import PostedDate from "./PostedDate";
import Location from "./Location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { extractDateOnly } from "../../extractDateOnly";

type Props = { createdAt: string; location: string; style?: string };

export const Info = ({ createdAt, location, style }: Props) => {
  const dateOnly = extractDateOnly(createdAt);
  const InfoClasses = `${style || ""}`;
  return (
    <div className={InfoClasses}>
      <PostedDate posted={dateOnly} />
      <FontAwesomeIcon icon={faCircle} className="w-0.5" />
      <Location location={location} />
    </div>
  );
};

export default Info;
