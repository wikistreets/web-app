import Title from "./Title";
import Info from "./Info/Info";
import TextPreview from "./TextPreview";
import Thumbnail from "./Thumbnail";
import { FeatureCollection } from "@/types/featureCollection";
import Separator from "@/components/Separator/Separator";
type Props = {
  data: FeatureCollection;
  size?: string;
  style?: string;
};

export const PostListSingle = ({ data, size, style }: Props) => {
  const PostListSingleClasses = `${size} ${style}`;
  const features = data.features;

  return (
    <>
      {features.map((feature, idx) => (
        <>
          <div key={idx} className={`${PostListSingleClasses} overflow-hidden`}>
            <div className="col-span-2 pr-4 text-secondary font-light max-h-28">
              <Title
                title={feature.properties.title}
                style="font-medium text-primary text-sm text-start"
              />
              <Info
                createdAt={feature.createdAt}
                location={feature.properties.address}
                style="flex gap-2 items-center text-xs text-start overflow-hidden py-3.5"
              />
              <TextPreview
                textPreview={feature.properties.body}
                style="text-xs text-start overflow-hidden"
              />
            </div>
            <Thumbnail
              imageUrl={
                feature.properties.photos.length > 0
                  ? feature.properties.photos[0].path
                  : "" // TODO: render different thumbnails based on type
              }
              size="col-span-1 aspect-square w-full"
            />
          </div>
          <Separator />
        </>
      ))}
    </>
  );
};

export default PostListSingle;
