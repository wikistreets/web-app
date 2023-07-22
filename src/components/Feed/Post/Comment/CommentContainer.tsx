import LeaveComment from "./LeaveComment";
import ViewAll from "./ViewAll";
import Comment from "./Comment";

type Props = {};

const CommentContainer = (props: Props) => {
  return (
    <div className="bg-white text-secondary px-2 text-sm font-normal flex flex-col gap-1 justify-start">
      <LeaveComment />
      <ViewAll />
      <Comment />
    </div>
  );
};

export default CommentContainer;
