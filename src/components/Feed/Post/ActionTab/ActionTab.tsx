import Dropdown from "./Dropdown";
import ToolBar from "./ToolBar";
import Info from "./Info";

type ActionTabProps = {};

export const ActionTab: React.FC<ActionTabProps> = (props) => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center pb-4 bg-white
      gap-1 md:gap-2
      z-20 sticky top-60 sm:top-0"
    >
      <Dropdown />
      <ToolBar />
      <Info totalPosts={30} totalContributors={9} totalDuplicates={25} />
    </div>
  );
};

export default ActionTab;
