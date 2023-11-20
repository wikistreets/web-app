import { MapFeedContainer } from "@/components/MapFeedContainer";

export default function Map({ params }: { params: { id: string } }) {
  return (
    <>
      <MapFeedContainer style="my-4 md:my-8" />
    </>
  );
}
