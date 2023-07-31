"use client";

import dynamic from "next/dynamic";
import PostContainer from "./Post/PostContainer";
import ActionTab from "./Post/ActionTab/ActionTab";
import MockData from "../../mock-data/mockData";

const Map = dynamic(
  () => {
    return import("@/components/Feed/Post/Map");
  },
  { ssr: false }
);

const Feed = () => {
  const mockUsers = MockData;
  //   console.log("mockUsers", mockUsers);
  return (
    <section
      className="relative flex w-full h-full mx-auto
      flex-col sm:flex-row sm:gap-4
      max-w-lg sm:max-w-none sm:overflow-auto
      sm:px-4 md:px-10 lg:px-14 xl:px-16
      py-8 sm:py-10"
    >
      <Map />
      <section className="flex flex-col items-center justify-center container">
        <ActionTab />
        <PostContainer users={mockUsers} />
      </section>
    </section>
  );
};

export default Feed;
