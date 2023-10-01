import PostedDate from "./PostedDate";
import Location from "./Location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

type Props = { posted: string; location: string; style?: string };

export const Info: React.FC<Props> = ({ posted, location, style }) => {
  const InfoClasses = `${style || ""}`;
  return (
    <div className={InfoClasses}>
      <PostedDate posted={posted} />
      <FontAwesomeIcon icon={faCircle} className="w-0.5" />
      <Location location={location} />
    </div>
  );
};

export default Info;
