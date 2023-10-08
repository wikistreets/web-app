import Separator from "../Separator/Separator";
import dynamic from "next/dynamic";

const MapListSingle = dynamic(
  () => {
    return import("../Maps/Map/MapListSingle");
  },
  { ssr: false }
);

export const MapListMultiple = async () => {
  const res = await fetch(
    "http://localhost:3000/media/mock-feature-collections/feature-collection-1.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // console.log("data", data);
  const featureCollections = [];
  for (let i = 0; i < 10; i++) {
    featureCollections.push(data);
  }

  return (
    <section
      className="bg-white w-full pt-4 md:pt-6 lg:pt-8
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16"
    >
      <div className="flex flex-col gap-8 items-center">
        {featureCollections.map((data, idx) => (
          <>
            <MapListSingle
              key={idx}
              data={data}
              size="w-full h-28 md:h-32 lg:h-36 xl:h-40"
              style="flex justify-between text-center gap-4"
            />
            <Separator />
          </>
        ))}
      </div>
    </section>
  );
};

export default MapListMultiple;
