import MapFormContainer from "@/components/Forms/MapFormContainer";

export default function CreateMap({ params }: { params: { id: string } }) {
  return (
    <>
      <MapFormContainer style="my-4 md:my-8" />
    </>
  );
}
