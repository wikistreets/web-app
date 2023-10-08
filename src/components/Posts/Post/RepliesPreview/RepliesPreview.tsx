"use client";

type Props = {
  total: number;
};

export const RepliesPreview: React.FC<Props> = ({ total }) => {
  const handleViewAll = () => {
    console.log("handleViewAll!");
  };

  return (
    <div className="bg-white text-secondary px-2 font-normal flex flex-col gap-1 justify-start">
      <h6 className="w-full text-xs" onClick={handleViewAll}>
        View {total} replies
      </h6>
    </div>
  );
};

export default RepliesPreview;
