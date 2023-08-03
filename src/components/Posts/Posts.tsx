"use client";

import { useContext } from "react";
import { StaticImageData } from "next/image";
import Post from "./Post/Post";
import Info from "../MapFeedContainer/Feed/Info";
import { SearchContext } from "@/context/SearchContext";

type UserObject = {
  userID: string;
  userName: string | "";
  userPic: StaticImageData;
  maps: {
    mapID: string;
    mapType: string;
    mapTitle: string;
    mapData: {
      centerX: number;
      centerY: number;
      markerX: number;
      markerY: number;
    };
    posts: {
      postID: string;
      postTitle: string;
      posted: number;
      postMedia: StaticImageData[] | [];
      location?: string;
      caption?: string | null;
      comments?: Array<{ commentText: string }> | [];
    }[];
  }[];
};

type Props = {
  users: UserObject[];
};

export const Posts: React.FC<Props> = ({ users }) => {
  const { searchIsClicked } = useContext(SearchContext);

  // TODO: which posts to show & order
  const Posts = users.map((user, idx) => {
    return (
      <Post
        key={idx}
        userID={user.userID}
        userName={user.userName}
        userPic={user.userPic}
        maps={user.maps}
      />
    );
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
          {Posts}
        </>
      )}
    </div>
  );
};

export default Posts;
