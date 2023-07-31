"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

type InfoProps = {
  username: string;
  posted: number;
  mapTitle: string;
};

const Info = (props: InfoProps) => {
  return (
    <section className="flex flex-col w-full">
      <div className="flex justify-start items-center gap-1.5">
        <p className="text-sm">{props.username}</p>
        <FontAwesomeIcon icon={faCircle} className="w-0.5 text-secondary" />
        <p className="text-secondary text-sm">{props.posted}d</p>
      </div>
      <p className="text-secondary text-sm">{props.mapTitle}</p>
    </section>
  );
};

export default Info;
