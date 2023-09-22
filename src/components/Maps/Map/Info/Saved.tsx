import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

type Props = { saved: number };

export const Saved: React.FC<Props> = ({ saved }) => {
  return (
    <div className="flex gap-1 items-center">
      <FontAwesomeIcon icon={faBookmark} />
      {saved}{" "}
    </div>
  );
};

export default Saved;
