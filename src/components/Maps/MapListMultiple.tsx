"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";

import dynamic from "next/dynamic";
const MapListSingle = dynamic(
  () => {
    return import("../Maps/Map/MapListSingle");
  },
  { ssr: false }
);

type MapData = {
  centerX: number;
  centerY: number;
  markerX: number;
  markerY: number;
  title: string;
  updated: number; // update TYPE later!
  saved: number;
  copied: number;
  shared: number;
};

export const MapListMultiple: React.FC = () => {
  const mapData: MapData[] = [
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Washington D.C. Family Trip",
      updated: 1,
      saved: 45,
      copied: 30,
      shared: 71,
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Anatomy of Vermeer's Milkmaid",
      updated: 1,
      saved: 59,
      copied: 16,
      shared: 33,
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Damaged Sidewalks in Croton",
      updated: 1,
      saved: 101,
      copied: 48,
      shared: 29,
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "School Walking Routes",
      updated: 1,
      saved: 29,
      copied: 5,
      shared: 44,
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Family Genealogy",
      updated: 1,
      saved: 85,
      copied: 50,
      shared: 102,
    },
    {
      centerX: 51.505,
      centerY: -0.09,
      markerX: 51.505,
      markerY: -0.09,
      title: "Best WFH Cafes in East Village",
      updated: 1,
      saved: 94,
      copied: 37,
      shared: 51,
    },
  ];

  return (
    <section className="bg-white w-full pt-4 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
      <div className="flex flex-col gap-2">
        {mapData.map((data, idx) => (
          <>
            <MapListSingle
              key={idx}
              centerX={data.centerX}
              centerY={data.centerY}
              markerX={data.markerX}
              markerY={data.markerY}
              title={data.title}
              updated={data.updated}
              saved={data.saved}
              copied={data.copied}
              shared={data.shared}
              size="w-full h-28"
              style="flex justify-between text-center"
            />
            <Separator className="h-[1px] bg-slate-100" />
          </>
        ))}
      </div>
    </section>
  );
};

export default MapListMultiple;
