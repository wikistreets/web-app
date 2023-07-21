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
      <div className="flex flex-row justify-start items-center gap-1">
        <h6 className="">{props.username}</h6>
        <FontAwesomeIcon icon={faCircle} className="w-0.5 text-secondary" />
        <h6 className="text-secondary ">{props.posted}d</h6>
      </div>
      <h6 className="text-secondary ">{props.mapTitle}</h6>
    </section>
  );
};

export default Info;
