import { PopUpClose } from "./PopUpClose";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  style?: string;
}

const PopUpStyleDefault =
  "flex flex-col z-50 fixed w-full h-full inset-x-0 bottom-0 p-4 \
  bg-white text-primary rounded-t-none shadow-md \
  transform transition-transform ease-in-out duration-700";

export const PopUpContainer: React.FC<Props> = ({
  isOpen,
  onClose,
  content,
  style,
}) => {
  const popUpClasses = `${PopUpStyleDefault} ${
    isOpen ? "translate-y-0" : "translate-y-full"
  } ${style}`;

  return (
    <>
      <div className={popUpClasses}>
        <PopUpClose onClose={onClose} />
        {content}
      </div>
    </>
  );
};
