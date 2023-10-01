"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";

import dynamic from "next/dynamic";
import { StaticImageData } from "next/image";
const PostListSingle = dynamic(
  () => {
    return import("../ListView/PostListSingle");
  },
  { ssr: false }
);

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

type PostData = {
  imageUrl: string;
  title: string;
  posted: string;
  location: string;
  textPreview: string;
};

export const PostListMultiple: React.FC<Props> = ({ users }) => {
  //   const postData: PostData[] = [
  //     {
  //       imageUrl: "Aa",
  //       title: "Washington D.C. Family Trip",
  //       posted: "March 1, 2020",
  //       location: "aaa",
  //       textPreview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit!",
  //     },
  //     {
  //       imageUrl: "Aa",
  //       title: "Washington D.C. Family Trip",
  //       posted: "March 1, 2020",
  //       location: "aaa",
  //       textPreview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit!",
  //     },
  //     {
  //       imageUrl: "Aa",
  //       title: "Washington D.C. Family Trip",
  //       posted: "March 1, 2020",
  //       location: "aaa",
  //       textPreview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit!",
  //     },
  //     {
  //       imageUrl: "Aa",
  //       title: "Washington D.C. Family Trip",
  //       posted: "March 1, 2020",
  //       location: "aaa",
  //       textPreview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit!",
  //     },
  //     {
  //       imageUrl: "Aa",
  //       title: "Washington D.C. Family Trip",
  //       posted: "March 1, 2020",
  //       location: "aaa",
  //       textPreview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit!",
  //     },
  //     {
  //       imageUrl: "Aa",
  //       title: "Washington D.C. Family Trip",
  //       posted: "March 1, 2020",
  //       location: "aaa",
  //       textPreview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit!",
  //     },
  //   ];

  return (
    <section className="bg-white w-full pt-4 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
      {/* <div className="flex flex-col gap-2">
        {users.map((user, idx) => (
          <>
            <PostListSingle
              key={idx}
              imageUrl={user.maps}
              title={user.posts}
              posted={user.posted}
              location={user.location}
              textPreview={user.textPreview}
              size="w-full h-28"
              style="flex justify-between text-center"
            />
            <Separator className="h-[1px] bg-slate-100" />
          </>
        ))}
      </div> */}
    </section>
  );
};

export default PostListMultiple;
