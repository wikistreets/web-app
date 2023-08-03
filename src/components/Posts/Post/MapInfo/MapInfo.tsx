import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faFileLines } from "@fortawesome/free-solid-svg-icons";

type Props = {
  location?: string;
  postTitle?: string;
};

export const MapInfo: React.FC<Props> = ({ location, postTitle }) => {
  const geoMapBar = (
    <>
      <FontAwesomeIcon
        icon={faLocationDot}
        size="lg"
        className="text-indigo-600"
      />
      <h6 className="text-indigo-600 text-md font-medium">{location}</h6>
    </>
  );
  const imageMapBar = (
    <>
      <FontAwesomeIcon
        icon={faFileLines}
        size="lg"
        className="text-indigo-600"
      />
      <h6 className="text-indigo-600 text-md font-medium">{postTitle}</h6>
    </>
  );
  return (
    <section className="bg-indigo-50 flex gap-2 px-2 py-3 justify-start items-center">
      {location && geoMapBar}
      {postTitle && imageMapBar}
    </section>
  );
};

export default MapInfo;
