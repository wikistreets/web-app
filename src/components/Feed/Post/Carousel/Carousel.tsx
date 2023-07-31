"use client";

import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
  EmblaEventType,
  UseEmblaCarouselType,
} from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useCallback } from "react";

type CarouselProps = {
  postID: string;
  postMedia: StaticImageData[] | [];
};

const wheelGesturesOptions = {
  wheelDraggingClass: "",
};

export const Carousel: React.FC<CarouselProps> = ({ postID, postMedia }) => {
  const options = {
    loop: true,
    plugins: [WheelGesturesPlugin(wheelGesturesOptions)],
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const carouselContent = postMedia.map((media, idx) => (
    <div className="embla__slide shrink-0 w-full" key={idx}>
      <Image
        key={idx}
        src={media["src"]}
        alt={""}
        width={390}
        height={390}
        className="aspect-square object-cover w-full"
      />
    </div>
  ));

  return (
    <>
      <div className="embla overflow-hidden relative">
        <div className="embla__viewport w-full" ref={emblaRef}>
          <div className="embla__container w-full flex">{carouselContent}</div>
        </div>
        <div className="embla__buttons absolute top-1/2 w-full flex justify-between px-2 text-white opacity-60">
          {carouselContent.length > 1 && (
            <>
              <button className="embla__prev z-10" onClick={scrollPrev}>
                <FontAwesomeIcon icon={faCircleChevronLeft} size="xl" />
              </button>
              <button className="embla__next z-10" onClick={scrollNext}>
                <FontAwesomeIcon icon={faCircleChevronRight} size="xl" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Carousel;
