import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClose: () => void;
}

export const PopUpClose: React.FC<Props> = ({ onClose }) => {
  return (
    <button className="absolute right-4">
      <FontAwesomeIcon
        icon={faXmark}
        onClick={onClose}
        className="text-secondary"
      />
    </button>
  );
};
