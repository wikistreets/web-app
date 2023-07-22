"use client";

import Image, { StaticImageData } from "next/image";

type SliderProps = {
  postID: string;
  postMedia: StaticImageData[] | [];
};

const Slider = (props: SliderProps) => {
  const sliderContent = props.postMedia.map((media, idx) => {
    return (
      <Image
        key={idx}
        src={media["src"]}
        alt={""}
        width={390}
        height={390}
        className="aspect-square object-cover w-full min-w-full"
      />
    );
  });
  // console.log(sliderContent);

  return (
    <figure className="flex flex-row w-full overflow-x-auto">
      {sliderContent}
    </figure>
  );
};

export default Slider;
