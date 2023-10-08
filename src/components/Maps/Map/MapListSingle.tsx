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
      <div className="flex flex-col justify-between text-secondary font-light">
        <Title
          title={data.title}
          style="font-medium text-primary text-sm text-start"
        />
        <UpdatedDate updated={dateString} style="text-xs text-start" />
        <Info
          saved={data.subscribers.length}
          copied={data.forks.length}
          shared={50}
          style="flex gap-2 justify-start items-center text-xs"
        />
      </div>
      <Thumbnail data={data} size="w-full h-28" />
    </div>
  );
};

export default MapListSingle;
