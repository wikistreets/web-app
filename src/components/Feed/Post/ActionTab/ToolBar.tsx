import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { PiPlusCircleBold } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ToolBarProps = {};

export const ToolBar: React.FC<ToolBarProps> = (props) => {
  const handleSearch = () => {
    console.log("search");
  };
  const handleShare = () => {
    console.log("Share");
  };
  const handleCreate = () => {
    console.log("Create map? post?");
  };

  return (
    <div className="flex gap-6 justify-center items-center bg-white w-full text-indigo-600">
      <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearch} />
      <FontAwesomeIcon icon={faArrowUpFromBracket} onClick={handleShare} />
      <PiPlusCircleBold size="1.3rem" onClick={handleCreate} />
    </div>
  );
};

export default ToolBar;
