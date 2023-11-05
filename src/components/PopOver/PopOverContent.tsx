import { useState, useRef, useEffect } from "react";
import PopOverClose from "./PopOverClose";

interface PopOverContentProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  style?: string;
}

const PopOverStyleDefault =
  "flex flex-col z-50 fixed w-full h-full inset-x-0 bottom-0 p-4 \
  bg-white text-primary rounded-t-none shadow-md \
  transform transition-transform ease-in-out duration-700";

export const PopOverContent: React.FC<PopOverContentProps> = ({
  isOpen,
  onClose,
  content,
  style,
}) => {
  const popOverRef = useRef<HTMLDivElement | null>(null);

  const handleDiscard = () => {
    onClose();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popOverRef.current &&
        !popOverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const popOverClasses = `${PopOverStyleDefault} ${
    isOpen ? "translate-y-0" : "translate-y-full"
  } ${style}`;

  return (
    <>
      <div className={popOverClasses} ref={popOverRef}>
        <PopOverClose onClose={onClose} />
        {content}
      </div>
      {/* {isOpen && (
        <div
          className={`z-50 fixed inset-0 bg-gray-900 bg-opacity-50 w-full h-full`}
        >
          <div className={popOverClasses} ref={popOverRef}>
            <PopOverClose onClose={onClose} />
            {content}
          </div>
        </div>
      )} */}
    </>
  );
};
