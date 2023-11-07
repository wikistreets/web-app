interface Props {
  onClick: () => void;
  content: React.ReactNode;
  style?: string;
}
import { Button } from "../ui/button";

export const PopUpTrigger: React.FC<Props> = ({ onClick, content, style }) => {
  return (
    <Button onClick={onClick} className={style}>
      {content}
    </Button>
  );
};
