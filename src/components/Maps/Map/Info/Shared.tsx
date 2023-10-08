import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

type Props = { shared: number };

export const Shared: React.FC<Props> = ({ shared }) => {
  return (
    <div className="flex gap-1 items-center">
      <FontAwesomeIcon icon={faArrowUpFromBracket} />
      {shared}{" "}
    </div>
  );
};

export default Shared;
