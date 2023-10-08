type Props = { location: string };

export const Location = ({ location }: Props) => {
  return <p className="truncate">{location}</p>;
};

export default Location;
