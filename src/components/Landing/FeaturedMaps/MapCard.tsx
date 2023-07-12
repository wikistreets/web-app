"use client";

import Image from "next/image";

interface MapCardProps {
  img: string;
  title: string;
}

const MapCard: React.FC<MapCardProps> = ({ img, title }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4 pt-4 rounded-lg bg-white">
      <Image
        src={`/${img}`}
        width={338}
        height={192}
        alt={title}
        className="w-full h-48 text-center"
      />
      <h3 className="w-full py-4 text-center">{title}</h3>
    </div>
  );
};

export default MapCard;
