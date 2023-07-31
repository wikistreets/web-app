"use client";

import { useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type CarouselProps = {
  postID: string;
  postMedia: StaticImageData[] | [];
};

export const Carousel: React.FC<CarouselProps> = ({ postID, postMedia }) => {
  const options: EmblaOptionsType = { loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);

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
      <div className="embla relative overflow-hidden">
        <div className="embla__viewport w-full" ref={emblaRef}>
          <div className="embla__container w-full flex">{carouselContent}</div>
        </div>
        <div
          className="embla__buttons absolute top-1/2 w-full
          flex justify-between px-2 text-white opacity-60"
        >
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
