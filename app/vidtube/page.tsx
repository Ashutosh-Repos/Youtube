"use client";
import React from "react";
import VideoCard from "@/components/VideoCard";
import { TimeUnits } from "@/components/VideoCard";
import { useState, useEffect } from "react";
import axios from "axios";

interface ApiResponse {
  statusCode: Number;
  data: {} | [] | string;
  message: string;
  success: boolean;
}

interface videoResponse {
  _id: string;
  videoFile: string;
  thumbnail: string;
  title: string;
  description: string;
  owner: string;
  views: Number;
  isPublic: boolean;
  comments: [];
  likesCount: Number;
  commentsCount: Number;
}
const HomePage = () => {
  const [videos, setVideos] = useState<videoResponse[]>();
  const dataFetch = async (url: string) => {
    const axiosRes = await axios(url);
    const apiResponse: ApiResponse = axiosRes.data;
    const videosData: videoResponse[] = apiResponse.data as videoResponse[];
    setVideos(videosData);
  };
  useEffect(() => {
    dataFetch(
      "https://vidtubebackend-5f0f.onrender.com/api/v1/video/?page=1&limit=10&sortType=dsc"
    );
  }, []);

  return (
    <div className="p-2 w-[calc(100vw-4.5rem)] h-[calc(100vh-4rem)] overflow-scroll grid max-md:grid-cols-1 max-lg:grid-cols-2 max-2xl:grid-cols-3 grid-cols-4 place-items-center gap-2.5">
      {videos?.length &&
        videos.map((e, index) => (
          <VideoCard
            key={index}
            id={e._id}
            timeUnit={TimeUnits.Minutes}
            title={e.title}
            views={e.views}
            videoSrc={e.videoFile}
            thumbNail={e.thumbnail}
            published={1}
            channelLogoSrc=""
            channelName="my channel"
          />
        ))}
    </div>
  );
};

export default HomePage;
