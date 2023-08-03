"use client";

import { StaticImageData } from "next/image";
import ActionTab from "./ActionTab/ActionTab";
import Posts from "./Posts";
import SearchContextProvider from "@/context/SearchContext";

// TODO: create UserContext
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

type PostContianerProps = {
  users: UserObject[];
};

export const PostContainer: React.FC<PostContianerProps> = ({ users }) => {
  return (
    <SearchContextProvider>
      <section className="relative flex flex-col items-center justify-start h-full container">
        <ActionTab />
        <Posts users={users} />
      </section>
    </SearchContextProvider>
  );
};

export default PostContainer;
