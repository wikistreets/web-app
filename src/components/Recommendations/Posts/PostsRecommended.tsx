import PostListMultiple from "@/components/Posts/ListView/PostListMultiple";

interface Style {
  style?: string;
}

export const PostsRecommended = ({ style }: Style) => {
  const PostsRecommdedClasses = `${style || ""}`;
  return (
    <section className={PostsRecommdedClasses}>
      <h3
        className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16
        text-xl font-dm-sans font-semibold"
      >
        We thought you might also like...
      </h3>
      <PostListMultiple />
    </section>
  );
};

export default PostsRecommended;
