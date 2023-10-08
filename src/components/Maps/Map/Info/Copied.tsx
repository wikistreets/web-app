import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-regular-svg-icons";

type Props = { copied: number };

export const Copied: React.FC<Props> = ({ copied }) => {
  return (
    <div className="flex gap-1 items-center">
      <FontAwesomeIcon icon={faClone} />
      {copied}{" "}
    </div>
  );
};

export default Copied;
