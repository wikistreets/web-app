type Props = { title: string; style?: string };

export const Title: React.FC<Props> = ({ title, style }) => {
  const TitleClasses = `${style || ""}`;
  return <p className={TitleClasses}>{title}</p>;
};

export default Title;
