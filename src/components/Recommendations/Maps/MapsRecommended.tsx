import MapListMultiple from "@/components/Maps/MapListMultiple";

interface Style {
  style?: string;
}

export const MapsRecommended = ({ style }: Style) => {
  const MapsRecommdedClasses = `${style || ""}`;
  return (
    <section className={MapsRecommdedClasses}>
      <h3
        className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
        text-xl font-dm-sans font-bold"
      >
        We thought you might also like...
      </h3>
      <MapListMultiple />
    </section>
  );
};

export default MapsRecommended;
