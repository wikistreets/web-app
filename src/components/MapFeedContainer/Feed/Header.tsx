import Selector from "./Selector";
import ToolBar from "./ToolBar";

export const Header: React.FC = () => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center bg-white
      sticky top-60 sm:top-0 z-10"
    >
      <Selector />
      <ToolBar />
    </div>
  );
};

export default Header;
