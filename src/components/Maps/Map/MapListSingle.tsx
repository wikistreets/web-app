import Title from "./Title";
import UpdatedDate from "./UpdatedDate";
import Info from "./Info/Info";
import Thumbnail from "./Thumbnail";

type Props = {
  centerX: number;
  centerY: number;
  markerX: number;
  markerY: number;
  title: string;
  updated: number;
  saved: number;
  copied: number;
  shared: number;
  size?: string;
  style?: string;
};

export const MapListSingle: React.FC<Props> = ({
  centerX,
  centerY,
  markerX,
  markerY,
  title,
  updated,
  saved,
  copied,
  shared,
  size,
  style,
}) => {
  const MapListSingleClasses = `${size} ${style}`;

  return (
    <div className={MapListSingleClasses}>
      <div className="flex flex-col justify-between py-2 text-secondary font-light">
        <Title
          title={title}
          style="font-medium text-primary text-sm text-start"
        />
        <UpdatedDate updated={updated} style="text-xs text-start" />
        <Info
          saved={saved}
          copied={copied}
          shared={shared}
          style="flex gap-2 justify-start items-center text-xs"
        />
      </div>
      <Thumbnail
        centerX={centerX}
        centerY={centerY}
        markerX={markerX}
        markerY={markerY}
        size="w-full h-28"
      />
    </div>
  );
};

export default MapListSingle;
