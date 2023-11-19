import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  totalPosts: number;
  totalContributors: number;
  totalDuplicates: number;
};

export const Info: React.FC<Props> = ({
  totalPosts,
  totalContributors,
  totalDuplicates,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 py-4 text-2xs sm:text-xs text-secondary text-center border-t">
      <p className="">updated 1 day ago</p>

      <div className="flex gap-2 justify-center items-center">
        <p>{totalPosts} posts</p>
        <FontAwesomeIcon icon={faCircle} className="w-0.5" />
        <p>{totalContributors} contributors</p>
        <FontAwesomeIcon icon={faCircle} className="w-0.5" />
        <p>{totalDuplicates} duplicates</p>
      </div>
    </div>
  );
};

export default Info;
