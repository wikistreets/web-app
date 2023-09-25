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
      <Map data={data} />
      <Container data={data} users={mockUsers} />
    </section>
  );
};

export default MapFeedContainer;
