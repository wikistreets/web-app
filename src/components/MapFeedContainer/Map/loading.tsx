import Skeleton from "@/components/Skeleton/Skeleton";

const Loading = () => {
  return (
    <div
      classname="w-full h-60 sticky top-0 z-20
        sm:aspect-square sm:h-full"
    >
      <Skeleton className="w-[50ch] h-100" />
    </div>
  );
};

export default Loading;
