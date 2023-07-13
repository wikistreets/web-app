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
    { img: "img5", title: "Family Genealogy" },
    { img: "img6", title: "Best WFH Cafes in East Village" },
  ];

  const handleViewMore = () => {
    console.log("View More clicked!");
  };

  return (
    <section
      className="bg-gradient-to-b from-indigo-600 to-white w-full flex flex-col gap-6 justify-center items-center
        px-4 sm:px-6 lg:px-14 py-8 sm:py-10"
    >
      <h2 className="font-dm-sans text-white tracking-wide md:text-2xl lg:text-3xl">
        Featured Maps
      </h2>

      <div
        className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2
          gap-3 sm:gap-5 lg:gap-5 
          justify-items-center items-center w-full h-fit"
      >
        {mapData.map((data, idx) => (
          <MapCard key={idx} img={data.img} title={data.title} />
        ))}
      </div>

      <Button onClick={handleViewMore} className="w-fit text-white">
        View more
      </Button>
    </section>
  );
};

export default FeaturedMaps;
