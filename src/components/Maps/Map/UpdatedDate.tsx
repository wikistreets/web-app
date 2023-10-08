type Props = { updated: string; style?: string };

export const UpdatedDate = ({ updated, style }: Props) => {
  const UpdatedDateClasses = `${style || ""}`;
  return <p className={UpdatedDateClasses}>updated {updated}</p>;
};

export default UpdatedDate;
