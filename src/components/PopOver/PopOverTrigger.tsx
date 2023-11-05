interface PopOverTriggerProps {
  onClick: () => void;
  text: string;
  style?: string;
}
import { Button } from "../ui/button";

export const PopOverTrigger: React.FC<PopOverTriggerProps> = ({
  onClick,
  text,
  style,
}) => {
  return (
    <Button onClick={onClick} className={style}>
      {text}
    </Button>
  );
};
