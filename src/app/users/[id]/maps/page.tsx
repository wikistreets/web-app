import MapListMultiple from "@/components/Maps/MapListMultiple";

type Props = {};

export default function UserMaps({ params }: { params: { id: string } }) {
  return (
    <>
      <MapListMultiple />
    </>
  );
}
