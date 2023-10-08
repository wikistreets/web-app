import PostListMultiple from "@/components/Posts/ListView/PostListMultiple";

export default function UserPosts({ params }: { params: { id: string } }) {
  return (
    <>
      <PostListMultiple />
    </>
  );
}
