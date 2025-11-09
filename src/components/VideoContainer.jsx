// VideoContainer component contains video cards.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_VIDEOS_API_URL } from "../utils/constants.js";
import VideoCard from "./VideoCard.jsx";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]); // creates a local state variable

  useEffect(() => {
    getVideosFromYoutube();
  }, []); // useEffect executes only first time "ONCE"

  // async func to get data from Youtube API
  const getVideosFromYoutube = async () => {
    const responseObj = await fetch(YOUTUBE_VIDEOS_API_URL);
    const jsonData = await responseObj.json();
    // console.log(jsonData);

    // updates state with data
    setVideos(jsonData.items);
  };

  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="video-container  flex flex-wrap items-stretch">
      {/* render list of videos cards */}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
