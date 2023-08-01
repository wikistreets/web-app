import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ViewAllProps = {
  total: number;
};

export const ViewAll: React.FC<ViewAllProps> = ({ total }) => {
  const handleViewAll = () => {
    console.log("handleViewAll!");
  };

  return (
    <div className="bg-white text-secondary px-2 text-sm font-normal flex flex-col gap-1 justify-start">
      <h6 className="w-full" onClick={handleViewAll}>
        View {total} replies
      </h6>
    </div>
  );
};

export default ViewAll;
