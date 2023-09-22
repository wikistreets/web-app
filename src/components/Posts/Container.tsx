"use client";

import { StaticImageData } from "next/image";
import Header from "@/components/MapFeedContainer/Feed/Header";
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

type Props = {
  users: UserObject[];
};

export const Container: React.FC<Props> = ({ users }) => {
  return (
    <SearchContextProvider>
      <section className="relative flex flex-col items-center justify-start h-full container">
        <Header />
        <Posts users={users} />
      </section>
    </SearchContextProvider>
  );
};

export default Container;
