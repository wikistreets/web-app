/**
 * A placeholder while content loads.
 * Inspired by https://www.alvar.dev/blog/skeleton-loading-with-suspense-in-next-js-13
 */
const Skeleton = ({ className }: { className: string }) => {
  return (
    <div
      className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`}
    />
  );
};

export default Skeleton;
