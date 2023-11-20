import dynamic from "next/dynamic";
import { Button } from "../ui/button";
// import MockFeatureCollection from "@/mock-data/mockFeatureCollection";

const MapCard = dynamic(
  () => {
    return import("./MapCard");
  },
  { ssr: false }
);

export const FeaturedMaps: React.FC = async () => {
  const res = await fetch(
    "http://localhost:3000/media/mock-feature-collections/feature-collection-1.json"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  // make some mock data
  const featureCollections = [];
  for (let i = 0; i < 6; i++) {
    featureCollections.push(data);
  }

  return (
    <section
      className="z-0 bg-gradient-to-b from-indigo-600 to-white w-full flex flex-col justify-center items-center
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
      py-8 sm:py-10
      gap-6 xl:gap-14 2xl:gap-12"
    >
      <h2
        className="font-dm-sans text-white tracking-wide
        text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Featured Maps
      </h2>

      <div
        className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2
        gap-5 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-9 2xl:gap-12
        justify-items-center items-center w-full"
      >
        {featureCollections.map((data, idx) => (
          <MapCard key={idx} data={data} />
        ))}
      </div>

      <Button className="text-xs">View more</Button>
    </section>
  );
};

export default FeaturedMaps;
