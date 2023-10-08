"use client";
import { useContext } from "react";
import Post from "./Post/Post";
import Info from "@/components/MapFeedContainer/Feed/Info";
import { SearchContext } from "@/context/SearchContext";
import { Data } from "@/types/data";

export const Posts = ({ data }: Data) => {
  const { searchIsClicked } = useContext(SearchContext);

  // make some mock data
  const featureCollections = [];
  for (let i = 0; i < 1; i++) {
    featureCollections.push(data);
  }

  // TODO: which posts to show & order
  const Posts = featureCollections.map((data, idx) => {
    return <Post key={idx} data={data} />;
  });

  return (
    <div
      className="flex flex-col w-full h-full bg-white 
          overflow-auto overscroll-contain scroll-smooth
          sm:h-screen"
    >
      {/* TODO: POSTS ALSO NEED TO SHOW UP WHEN CLICKED OUTSIDE OF THE SEARCH ICON! */}
      {searchIsClicked ? null : (
        <>
          <Info totalPosts={30} totalContributors={9} totalDuplicates={25} />
          <div className="flex flex-col gap-y-8">{Posts}</div>
        </>
      )}
    </div>
  );
};

export default Posts;
