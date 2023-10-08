import Title from "./Title";
import Info from "./Info/Info";
import TextPreview from "./TextPreview";
import Thumbnail from "./Thumbnail";

type Props = {
  imageUrl: string;
  title: string;
  posted: string;
  location: string;
  textPreview: string;
  size?: string;
  style?: string;
};

export const PostListSingle = ({
  title,
  posted,
  location,
  textPreview,
  size,
  style,
}: Props) => {
  const PostListSingleClasses = `${size} ${style}`;

  return (
    <div className={PostListSingleClasses}>
      <div className="flex flex-col justify-between py-2 text-secondary font-light">
        <Title
          title={title}
          style="font-medium text-primary text-sm text-start"
        />
        <Info
          posted={posted}
          location={location}
          style="flex gap-2 items-center text-xs text-start"
        />
        <TextPreview textPreview={textPreview} style="text-xs text-start" />
      </div>
      <Thumbnail imageUrl={""} size="h-28 aspect-square" />
    </div>
  );
};

export default PostListSingle;
