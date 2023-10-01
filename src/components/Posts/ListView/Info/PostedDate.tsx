type Props = { posted: string };

export const PostedDate: React.FC<Props> = ({ posted }) => {
  return <p>{posted}</p>;
};

export default PostedDate;
