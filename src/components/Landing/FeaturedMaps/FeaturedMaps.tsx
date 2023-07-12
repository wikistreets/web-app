"use client";

import MapCard from "./MapCard";
import { Button } from "@/components/ui/button";

interface MapData {
  img: string;
  title: string;
}

const FeaturedMaps: React.FC = () => {
  const mapData: MapData[] = [
    { img: "img1", title: "Washington D.C. Family Trip" },
    { img: "img2", title: "Anatomy of Vermeer's Milkmaid" },
    { img: "img3", title: "Damaged Sidewalks in Croton" },
    { img: "img4", title: "School Walking Routes" },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-600 to-white w-full py-8 flex flex-col gap-6 justify-center items-center">
      <h2 className="font-dm-sans text-white tracking-wide">Featured Maps</h2>

      <div className="grid grid-cols-1 grid-rows-4 gap-3 justify-items-center items-center w-full h-fit px-2.5">
        {mapData.map((data, idx) => (
          <MapCard key={idx} img={data.img} title={data.title} />
        ))}
      </div>

      <Button className="w-fit text-white">View more</Button>
    </div>
  );
};

export default FeaturedMaps;
