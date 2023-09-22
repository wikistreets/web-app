type Props = { updated: number; style?: string };

export const UpdatedDate: React.FC<Props> = ({ updated, style }) => {
  const UpdatedDateClasses = `${style || ""}`;
  return <p className={UpdatedDateClasses}>updated {updated} day ago</p>;
};

export default UpdatedDate;
