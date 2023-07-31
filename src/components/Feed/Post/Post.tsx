"use client";

import { StaticImageData } from "next/image";
import { useState } from "react";
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import Bar from "./Bar";
import Caption from "./Caption/Caption";
import ViewAll from "./Reply/ViewAll";

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

export const Post: React.FC<PostProps> = (props) => {
  const [userID, setUserID] = useState(null);
  const totalReplies: number = 23;

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
          {post.postMedia && (
            <Carousel
              postID={post.postID}
              postMedia={post.postMedia}
              options={{ loop: true }}
            />
          )}
          {map.mapType === "Geo" && <Bar location={post.location} />}
          {map.mapType === "Image" && <Bar postTitle={post.postTitle} />}
          {post.caption && <Caption caption={post.caption} />}
          <ViewAll total={totalReplies} />
        </div>
      );
    });
  });
  return <>{Post}</>;
};

export default Post;
