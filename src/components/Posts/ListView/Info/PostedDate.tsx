type Props = { posted: string };

export const PostedDate = ({ posted }: Props) => {
  return <p className="min-w-fit">{posted}</p>;
};

export default PostedDate;
