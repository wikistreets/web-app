import PostListMultiple from "@/components/Posts/ListView/PostListMultiple";
import PostsRecommended from "@/components/Recommendations/Posts/PostsRecommended";

export default function UserPosts({ params }: { params: { id: string } }) {
  return (
    <>
      <PostListMultiple />
      <PostsRecommended style="flex flex-col gap-4 my-10" />
    </>
  );
}
