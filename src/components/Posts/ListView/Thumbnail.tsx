import Image from "next/image";

type Props = { imageUrl: string; size?: string; style?: string };

export const Thumbnail: React.FC<Props> = ({ imageUrl, size, style }) => {
  const ThumbnailClasses = `${size} ${style || ""}`;
  return (
    <>
      <Image src={imageUrl} alt={""} className={ThumbnailClasses}></Image>
    </>
  );
};

export default Thumbnail;
