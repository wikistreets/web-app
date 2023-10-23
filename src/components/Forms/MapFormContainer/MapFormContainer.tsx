import dynamic from "next/dynamic";
import FormContainer from "./Form/FormContainer";
const Map = dynamic(
  () => {
    return import("@/components/Forms/MapFormContainer/Map/Map");
  },
  { ssr: false }
);
interface Style {
  style?: string;
}

const MapFormContainer = async ({ style }: Style) => {
  const MapContainerClasses = `relative mx-auto flex w-full h-full md:h-screen 
      flex-col md:grid md:grid-cols-2 md:gap-4
      max-w-lg md:max-w-none 
      px-4 sm:px-4 md:px-10 lg:px-14 xl:px-16
      ${style}
      md:overflow-auto`;

  return (
    <section className={MapContainerClasses}>
      <Map />
      <FormContainer />
    </section>
  );
};

export default MapFormContainer;
