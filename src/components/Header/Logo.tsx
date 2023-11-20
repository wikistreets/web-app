type Props = {
  size?: string;
  style?: string;
};

export const Logo: React.FC<Props> = ({ size, style }) => {
  const LogoClasses = `${size} ${style || ""}`;

  return <div className={LogoClasses}>W</div>;
};