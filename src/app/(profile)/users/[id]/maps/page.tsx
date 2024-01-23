import { MapListMultiple } from "@/components/Maps/MapListMultiple";
import { MapsRecommended } from "@/components/Recommendations/Maps/MapsRecommended";

export default function UserMaps({ params }: { params: { id: string } }) {
  return (
    <section className="flex flex-col">
      <MapListMultiple />
      <MapsRecommended style="flex flex-col gap-4 my-10" />
    </section>
  );
}
