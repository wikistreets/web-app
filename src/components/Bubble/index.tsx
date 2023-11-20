import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";

interface Props {
  bgColor?: string;
  textColor?: string;
  collaborator: string;
  onDelete: () => void;
}

export const Bubble: React.FC<Props> = ({
  bgColor,
  textColor,
  collaborator,
  onDelete,
}) => {
  return (
    <>
      <div
        className={cn(
          "flex justify-between items-center gap-2 rounded-2xl text-xs px-4 py-2 w-fit font-medium",
          bgColor,
          textColor
        )}
      >
        <span>{collaborator}</span>
        <button onClick={onDelete} type="button">
          <FontAwesomeIcon
            icon={faXmark}
            className={cn("hover:opacity-70", textColor)}
          />
        </button>
      </div>
    </>
  );
};
