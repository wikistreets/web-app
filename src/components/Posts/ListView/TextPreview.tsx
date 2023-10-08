type Props = { textPreview: string; style?: string };

export const TextPreview = ({ textPreview, style }: Props) => {
  const TextPreviewClasses = `${style || ""}`;
  return <p className={TextPreviewClasses}>{textPreview}</p>;
};

export default TextPreview;
