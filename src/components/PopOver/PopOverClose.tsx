import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClose: () => void;
}

export default function PopOverClose({ onClose }: Props) {
  return (
    <button className="absolute right-4">
      <FontAwesomeIcon
        icon={faXmark}
        onClick={onClose}
        className="text-secondary"
      />
    </button>
  );
}
