import dynamic from "next/dynamic";

const PostListSingle = dynamic(
  () => {
    return import("../ListView/PostListSingle");
  },
  { ssr: false }
);

export const PostListMultiple = async () => {
  const res = await fetch(
    "http://localhost:3000/media/mock-feature-collections/feature-collection-1.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // console.log("data", data);
  const featureCollections = [];
  for (let i = 0; i < 1; i++) {
    featureCollections.push(data);
  }

  return (
    <section className="bg-white w-full pt-4 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
      <div className="flex flex-col gap-4">
        {featureCollections.map((data, idx) => (
          <PostListSingle
            key={idx}
            data={data}
            size="w-full h-28"
            style="text-center grid grid-cols-3 h-28"
          />
        ))}
      </div>
    </section>
  );
};

export default PostListMultiple;
