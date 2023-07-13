import Image from "next/image";
import geoMap from "../../../public/media/geo-map.png";

const GeographicMap = () => {
  return (
    <section className="flex flex-col justify-center gap-3 max-w-sm">
      <Image
        src={geoMap}
        alt="Geographic Map"
        className="aspect-w-1 aspect-h-1"
      />

      <>
        <h3 className="font-dm-sans text-xl font-semibold tracking-wide">
          Standard Geographic Map
        </h3>
        <p className="text-secondary font-light text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          consectetur ipsum, voluptatum harum, quos quidem pariatur facere porro
          ullam quae ut dolorem corrupti deserunt illum autem explicabo
          veritatis culpa consequatur!
        </p>
      </>

      <section className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="font-bold text-indigo-600 text-lg">24/7</h3>
          <p className="text-secondary text-sm">Delivery</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-indigo-600 text-lg">99.9%</h3>
          <p className="text-secondary text-sm">Accuracy</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-indigo-600 text-lg">100k+</h3>
          <p className="text-secondary text-sm">Flexibility</p>
        </div>
      </section>
    </section>
  );
};

export default GeographicMap;
