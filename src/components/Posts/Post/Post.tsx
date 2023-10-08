"use client";

import { useState } from "react";
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import MapInfo from "./MapInfo/MapInfo";
import Body from "./Body/Body";
import RepliesPreview from "./RepliesPreview/RepliesPreview";
import { Data } from "@/types/data";

export const Post = ({ data }: Data) => {
  const [userID, setUserID] = useState(null);
  const features = data.features;

  const Post = features.map((feature, idx) => {
    return (
      <div key={idx}>
        <Header
          userPic={""}
          username={"foo.barstein"}
          createdAt={feature.createdAt}
          mapTitle={data.title}
        />
        {feature.properties.photos && (
          <Carousel
            postID={feature._id}
            photos={feature.properties.photos}
            options={{ loop: true }}
          />
        )}
        {data.mapType === "geographic" && (
          <MapInfo location={feature.properties.address} />
        )}
        {data.mapType === "image" && (
          <MapInfo postTitle={feature.properties.title} />
        )}
        {feature.properties.body && <Body bodyText={feature.properties.body} />}
        <RepliesPreview total={25} />
      </div>
    );
  });
  return <>{Post}</>;
};

export default Post;
