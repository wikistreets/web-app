import dynamic from "next/dynamic";
import Container from "@/components/Posts/Container";

const Map = dynamic(
  () => {
    return import("@/components/MapFeedContainer/Map/Map");
  },
  { ssr: false }
);

const MapFeedContainer = async () => {
  // get some mock data
  const res = await fetch(
    "http://localhost:3000/media/mock-feature-collections/feature-collection-1.json"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // console.log("data", data);

  return (
    <section
      className="relative mx-auto flex w-full h-full md:h-screen 
      flex-col md:grid md:grid-cols-2 md:gap-4
      max-w-lg md:max-w-none 
      px-4 sm:px-4 md:px-10 lg:px-14 xl:px-16
      my-2 md:my-2
      md:overflow-auto"
    >
      <Map data={data} />
      <Container data={data} />
    </section>
  );
};

export default MapFeedContainer;
