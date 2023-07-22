"use client";

import { useState } from "react";
import Header from "./Header/Header";
import Slider from "./Slider";
import { StaticImageData } from "next/image";

type PostProps = {
  userID: string;
  userName: string;
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

const Post = (props: PostProps) => {
  const [userID, setUserID] = useState(null);
  const Post = props.maps.map((map) => {
    return map.posts.map((post, idx) => {
      const uniqueKey = `${map.mapID}-${post.postID}`;
      return (
        <div key={uniqueKey}>
          <Header
            userPic={props.userPic}
            username={props.userName}
            posted={post.posted}
            mapTitle={map.mapTitle}
          />
          <Slider postID={post.postID} postMedia={post.postMedia} />
        </div>
      );
    });
  });
  return <>{Post}</>;
};

export default Post;
