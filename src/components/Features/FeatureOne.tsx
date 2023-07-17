"use client";

import Image from "next/image";
import featureOne from "../../../public/media/feature-one.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointUp,
  faRepeat,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const FeatureOne = () => {
  return (
    <section
      className="flex flex-col sm:flex-row 
      justify-between items-center w-full
      gap-5 sm:gap-8 md:gap-12 lg:gap-14 xl:gap-20"
    >
      <section
        className="flex flex-col justify-center
        gap-3 sm:gap-5 lg:gap-7 xl:gap-12 2xl:gap-20
        max-w-lg xl:max-w-fit
        items-center sm:items-start 
        "
      >
        <h3
          className="font-dm-sans font-semibold tracking-wide
          text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          Customize Your Own
        </h3>
        {/* Feature 1.A */}
        <div className="flex justify-center items-start gap-3">
          <FontAwesomeIcon
            icon={faHandPointUp}
            color="#fff"
            className="p-2 bg-primary rounded-md mt-1"
          />
          <div className="flex flex-col justify-center items-start">
            <h6 className="font-dm-sans tracking-wide text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              Map on-the-go
            </h6>
            <p
              className="text-secondary font-light lg:leading-relaxed
              text-xs sm:text-xs md:text-sm lg:text-md xl:text-md"
            >
              Lorem ipsum dolor sit amet consectetur, adiping elit. Eius
              consectetur ipsum, voluptatum harum.
            </p>
          </div>
        </div>
        {/* Feature 1.B */}
        <div className="flex justify-center items-start gap-3">
          <FontAwesomeIcon
            icon={faRepeat}
            color="#fff"
            className="p-2 bg-primary rounded-md mt-1"
          />
          <div className="flex flex-col justify-center items-start sm:w-full">
            <h6
              className="font-dm-sans tracking-wide
              text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
            >
              Turn any image into a map
            </h6>
            <p
              className="text-secondary font-light lg:leading-relaxed
              text-xs sm:text-xs md:text-sm lg:text-md xl:text-md"
            >
              Lorem ipsum dolor sit amet consectetur, adiping elit. Eius
              consectetur ipsum, voluptatum harum.
            </p>
          </div>
        </div>
        {/* Feature 1.C */}
        <div className="flex justify-center items-start gap-3">
          <FontAwesomeIcon
            icon={faCamera}
            color="#fff"
            className="p-2 bg-primary rounded-md mt-1"
          />
          <div className="flex flex-col justify-center items-start">
            <h6
              className="font-dm-sans tracking-wide
              text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
            >
              Snap and map photos
            </h6>
            <p
              className="text-secondary font-light lg:leading-relaxed
              text-xs sm:text-xs md:text-sm lg:text-md xl:text-md"
            >
              Lorem ipsum dolor sit amet consectetur, adiping elit. Eius
              consectetur ipsum, voluptatum harum.
            </p>
          </div>
        </div>
      </section>

      <Image
        src={featureOne}
        alt="Customize Your Own"
        className="rounded-lg object-cover
        w-full lg:max-w-sm xl:max-w-md 2xl:max-w-xl"
      />
    </section>
  );
};

export default FeatureOne;
