"use client";

import { StaticImageData } from "next/image";
import Post from "./Post";

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

const PostContainer = (props: PostContianerProps) => {
  // TODO: which posts to show & order
  const Posts = props.users.map((user, idx) => {
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
  //   console.log("posts in PostContainer", Posts);
  return (
    <div
      className="md:container flex flex-col w-full h-full bg-blue-50
      overflow-auto overscroll-contain scroll-smooth
      lg:h-screen"
    >
      {Posts}
    </div>
  );
};

export default PostContainer;
