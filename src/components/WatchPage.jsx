// 'WatchPage' component to watch a video

import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router";

import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/store/sidebarMenuSlice"; // reducer function

// my components
import CommentsContainer from "./CommentsContainer.jsx";
import LiveChat from "./LiveChat.jsx";

const WatchPage = () => {
  const [searchParams] = useSearchParams(); // hook
  console.log(searchParams.get("v")); // http://localhost:5173/watch?v=2W7z4SB8Vy8  --> ?v = 2W7z4SB8Vy8

  const dispatch = useDispatch(); // hook

  useEffect(() => {
    dispatch(closeMenu()); // dispatches an action
  }, []);

  return (
    <div className="flex flex-col  w-full">
      <div className="Watch-Page  px-5 flex">
        <div className="video-player-container">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="live-chat-container  w-full">
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
