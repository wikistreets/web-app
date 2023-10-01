type Props = { textPreview: string; style?: string };

export const TextPreview: React.FC<Props> = ({ textPreview, style }) => {
  const TextPreviewClasses = `${style || ""}`;
  return <p className={TextPreviewClasses}>{textPreview}</p>;
};

export default TextPreview;
