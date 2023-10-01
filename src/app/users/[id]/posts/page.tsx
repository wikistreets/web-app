import PostListMultiple from "@/components/Posts/ListView/PostListMultiple";
type Props = {};

export default function UserPosts({ params }: { params: { id: string } }) {
  return (
    <>
      <PostListMultiple users={[]} />
    </>
  );
}
