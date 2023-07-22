"use client";

import dynamic from "next/dynamic";
import PostContainer from "./Post/PostContainer";
import MockData from "../../mock-data/mockData";

const MapInPost = dynamic(
  () => {
    return import("@/components/Maps/MapInPost");
  },
  { ssr: false }
);

const Feed = () => {
  const mockUsers = MockData;
  //   console.log("mockUsers", mockUsers);
  return (
    <section
      className="flex flex-col lg:flex-row lg:gap-4
      w-full h-full
      sm:px-4 md:px-10 lg:px-14 xl:px-16
      py-8 sm:py-10
      lg:overflow-auto"
    >
      <MapInPost />
      <PostContainer users={mockUsers} />
    </section>
  );
};

export default Feed;
