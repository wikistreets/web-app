"use client";

import Image, { StaticImageData } from "next/image";
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
  // options?: EmblaOptionsType;
};

const wheelGesturesOptions = {
  wheelDraggingClass: "",
};

export const Carousel: React.FC<CarouselProps> = ({ postID, postMedia }) => {
  const options = {
    loop: true,
    dragFree: true,
    plugins: [WheelGesturesPlugin(wheelGesturesOptions)],
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const sliderContent = postMedia.map((media, idx) => (
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
  // console.log(sliderContent);

  return (
    <>
      <div className="embla overflow-hidden">
        <div className="embla__viewport  w-full" ref={emblaRef}>
          <div className="embla__container w-full flex">{sliderContent}</div>
        </div>
        <div className="embla__buttons object-center flex justify-between">
          <button className="embla__prev z-10" onClick={scrollPrev}>
            Prev
          </button>
          <button className="embla__next z-10" onClick={scrollNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
