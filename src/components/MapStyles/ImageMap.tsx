"use client";

import Image from "next/image";
import imageMap from "../../../public/media/image-map.png";

export const ImageMap: React.FC = () => {
  return (
    <section
      className="flex flex-col sm:flex-row 
      justify-between sm:items-center w-full
      gap-3 sm:gap-12 lg:gap-16 xl:gap-20"
    >
      <Image
        src={imageMap}
        alt="Custom Image Map"
        className="rounded-lg object-cover
        w-full lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
      />

      <section
        className="flex flex-col justify-center
        gap-3 sm:gap-5 lg:gap-7 xl:gap-12 2xl:gap-20
        max-w-fit lg:max-w-fit"
      >
        <h3
          className="font-dm-sans font-semibold tracking-wide
          text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          Custom Image Map
        </h3>
        <p
          className="text-secondary font-light lg:leading-relaxed
          text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          consectetur ipsum, voluptatum harum, quos quidem pariatur facere porro
          ullam quae ut dolorem corrupti deserunt illum autem explicabo
          veritatis culpa consequatur!
        </p>

        {/* TODO: make it a component if keeping... */}
        <section
          className="flex justify-between sm:justify-start  
          sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28"
        >
          <div className="flex flex-col">
            <h3 className="font-bold text-indigo-600 text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              24/7
            </h3>
            <p className="text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg">
              Delivery
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-indigo-600 text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              99.9%
            </h3>
            <p className="text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg">
              Accuracy
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-indigo-600 text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              100k+
            </h3>
            <p className="text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg">
              Flexibility
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ImageMap;
