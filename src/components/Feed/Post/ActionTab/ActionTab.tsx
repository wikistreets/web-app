import Dropdown from "./Dropdown";
import ToolBar from "./ToolBar";

type ActionTabProps = {};

export const ActionTab: React.FC<ActionTabProps> = (props) => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center bg-white
      sticky top-60 sm:top-0 z-10"
    >
      <Dropdown />
      <ToolBar />
    </div>
  );
};

export default ActionTab;
