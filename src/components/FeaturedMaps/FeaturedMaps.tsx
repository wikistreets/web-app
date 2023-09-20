"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const MapCard = dynamic(
  () => {
    return import("./MapCard");
  },
  { ssr: false }
);

type MapData = {
  centerX: number;
  centerY: number;
  markerX: number;
  markerY: number;
  title: string;
};

export const FeaturedMaps: React.FC = () => {
  const mapData: MapData[] = [
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Washington D.C. Family Trip",
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Anatomy of Vermeer's Milkmaid",
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Damaged Sidewalks in Croton",
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "School Walking Routes",
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Family Genealogy",
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Best WFH Cafes in East Village",
    },
  ];

  const handleViewMore = () => {
    console.log("View More clicked!");
  };

  return (
    <section
      className="bg-gradient-to-b from-indigo-600 to-white w-full flex flex-col justify-center items-center
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
      py-8 sm:py-10
      gap-6 xl:gap-14 2xl:gap-12"
    >
      <h2
        className="font-dm-sans text-white tracking-wide
        md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Featured Maps
      </h2>

      <div
        className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2
        gap-5 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-9 2xl:gap-12
        justify-items-center items-center w-full"
      >
        {mapData.map((data, idx) => (
          <MapCard
            key={idx}
            centerX={data.centerX}
            centerY={data.centerY}
            markerX={data.markerX}
            markerY={data.markerY}
            title={data.title}
          />
        ))}
      </div>

      <Button
        onClick={handleViewMore}
        className="w-fit text-white 
        md:px-6 lg:px-8 xl:px-8 2xl:px-10  
        md:py-4 lg:py-6 xl:py-6 2xl:py-8
        xl:text-lg 2xl:text-xl"
      >
        View more
      </Button>
    </section>
  );
};

export default FeaturedMaps;
