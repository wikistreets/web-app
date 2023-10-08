type Props = { location: string };

export const Location = ({ location }: Props) => {
  return <p className="overflow-hidden whitespace-nowrap">{location}</p>;
};

export default Location;
