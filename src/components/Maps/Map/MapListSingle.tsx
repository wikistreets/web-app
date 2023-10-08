import Title from "./Title";
import UpdatedDate from "./UpdatedDate";
import Info from "./Info/Info";
import Thumbnail from "./Thumbnail";
import { extractDateOnly } from "@/components/Posts/extractDateOnly";
import { Data } from "@/types/data";

export const MapListSingle = ({ data, size, style }: Data) => {
  const MapListSingleClasses = `${size} ${style}`;
  const dateString = extractDateOnly(data.updatedAt);

  return (
    <div className={MapListSingleClasses}>
      <div className="flex flex-col justify-between font-light">
        <Title
          title={data.title}
          style="font-bold text-primary text-sm sm:text-base text-start"
        />
        <UpdatedDate
          updated={dateString}
          style="text-xs text-start text-secondary"
        />
        <Info
          saved={data.subscribers.length}
          copied={data.forks.length}
          shared={50}
          style="flex gap-2 justify-start items-center text-xs text-primary font-normal"
        />
      </div>
      <Thumbnail data={data} size="h-full w-full" style="" />
    </div>
  );
};

export default MapListSingle;
