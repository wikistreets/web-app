"use client";

import dynamic from "next/dynamic";
import Container from "@/components/Posts/Container";
import MockData from "@/mock-data/mockData";
// import Map from "@/components/MapFeedContainer/Map/Map"

const Map = dynamic(
  () => {
    return import("@/components/MapFeedContainer/Map/Map");
  },
  { ssr: false }
);

const MapFeedContainer = () => {
  const mockUsers = MockData;
  //   console.log("mockUsers", mockUsers);
  return (
    <section
      className="relative mx-auto flex w-full h-full sm:h-screen 
      flex-col sm:flex-row sm:gap-4
      max-w-lg sm:max-w-none 
      sm:px-4 md:px-10 lg:px-14 xl:px-16
      py-2 sm:py-2
      sm:overflow-auto"
    >
      <Map />
      <Container users={mockUsers} />
    </section>
  );
};

export default MapFeedContainer;
