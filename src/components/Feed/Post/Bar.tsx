import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faFileLines } from "@fortawesome/free-solid-svg-icons";

type BarProps = {
  location?: string;
  postTitle?: string;
};

const Bar = (props: BarProps) => {
  const geoMapBar = (
    <>
      <FontAwesomeIcon
        icon={faLocationDot}
        size="lg"
        className="text-indigo-600"
      />
      <h6 className="text-indigo-600 text-md font-medium">{props.location}</h6>
    </>
  );
  const imageMapBar = (
    <>
      <FontAwesomeIcon
        icon={faFileLines}
        size="lg"
        className="text-indigo-600"
      />
      <h6 className="text-indigo-600 text-md font-medium">{props.postTitle}</h6>
    </>
  );
  return (
    <section className="bg-indigo-50 flex gap-2 px-2 py-3 justify-start items-center">
      {props.location && geoMapBar}
      {props.postTitle && imageMapBar}
    </section>
  );
};

export default Bar;
