import ReadMore from "./ReadMore";

type CaptionProps = {
  caption: string;
};

const Caption = (props: CaptionProps) => {
  return (
    <section className="bg-white p-2">
      <p className="text-secondary text-sm font-light">{props.caption}</p>
      {/* TODO: ReadMore logic */}
      <ReadMore />
    </section>
  );
};

export default Caption;
