// LiveChat component contains 'Live Chatting Messages'.

import { useEffect } from "react";

// my components
import ChatMessage from "./ChatMessage.jsx";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      // "API Polling" - poll for every 2 secs
      console.log("API Polling");
    }, 2000);

    // Cleanup fn
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2 bg-slate-100 border border-black rounded-lg">
      <ChatMessage name="Kumar" message="This is one of the greatest trailer" />
      <ChatMessage name="User 1" message="this game have good visuals" />
      <ChatMessage name="User 2" message="waiting for this game to launch" />
      <ChatMessage name="User 3" message="Interesting story gameplay" />
    </div>
  );
};

export default LiveChat;

// Live Chat Feature:-
/*
Steps:
   i) Data layer - Get Data live
   ii)U.I  layer - Update the UI
there are 2 Ways to handle Live data :-
  1)Web Sockets :-
    2 Way connection between Client and Server.
    we can quickly transfer data between Frontend to Backend (or) Backend to Frontend also.
    as soon as we open our App, a 'Web Socket' connection is established. we can send data immediately.
    i.e, 2 way, anytime continuos communication. No Regular Interval limits for communication.
    Ex: Trading, Stock market apps, WhatsApp.
  2)Long Polling or API polling:-
	UI requests the server. server sends data.
    i.e, communicates at given Interval.
    for every 3 seconds, frontend checks backend for new data.
    Ex: Gmail app
*/
