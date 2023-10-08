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
                style="font-bold text-primary text-sm sm:text-base text-start"
              />
              <Info
                createdAt={feature.createdAt}
                location={feature.properties.address}
                style="flex gap-2 items-center text-xs text-start overflow-hidden py-3.5"
              />
              <TextPreview
                textPreview={feature.properties.body}
                style="font-normal text-xs text-start text-primary text-clip overflow-hidden"
              />
            </div>
            <Thumbnail
              imageUrl={
                feature.properties.photos.length > 0
                  ? feature.properties.photos[0].path
                  : "https://wikistreets.io/static/uploads/b80c2c75-bb08-4f89-aabe-8aec1e5565a2.jpg" // TODO: render different thumbnails based on type
              }
              size="col-span-1 w-full h-full pl-4 sm:pl-8"
              style="object-cover object-center"
            />
          </div>
          <Separator />
        </>
      ))}
    </>
  );
};

export default PostListSingle;
