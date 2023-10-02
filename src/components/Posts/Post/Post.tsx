"use client";

import { StaticImageData } from "next/image";
import { useState } from "react";
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import MapInfo from "./MapInfo/MapInfo";
import Caption from "./Body/Body";
import RepliesPreview from "./RepliesPreview/RepliesPreview";

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
      postMedia: StaticImageData[];
      location?: string;
      caption?: string | null;
      comments?: Array<{ commentText: string }> | [];
    }[];
  }[];
};

export const Post: React.FC<PostProps> = ({ userName, userPic, maps }) => {
  const [userID, setUserID] = useState(null);
  const Post = maps.map(map => {
    return map.posts.map((post, idx) => {
      const uniqueKey = `${map.mapID}-${post.postID}`;
      return (
        <div key={uniqueKey}>
          <Header
            userPic={userPic}
            username={userName}
            posted={post.posted}
            mapTitle={map.mapTitle}
          />
          {post.postMedia && (
            <Carousel
              postID={post.postID}
              postMedia={post.postMedia}
              options={{ loop: true }}
            />
          )}
          {map.mapType === "Geo" && <MapInfo location={post.location} />}
          {map.mapType === "Image" && <MapInfo postTitle={post.postTitle} />}
          {post.caption && <Caption bodyText={post.caption} />}
          <RepliesPreview total={25} />
        </div>
      );
    });
  });
  return <>{Post}</>;
};

export default Post;
