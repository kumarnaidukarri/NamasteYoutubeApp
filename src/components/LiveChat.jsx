// LiveChat component contains 'Live Chatting Messages'.

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/chatSlice.js";

import { generateRandomName, generateRandomMessage } from "../utils/helper.js";

// my components
import ChatMessage from "./ChatMessage.jsx";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState(""); // local state variable

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages); // Subscribing to Chat Slice of Store

  useEffect(() => {
    const i = setInterval(() => {
      // "API Polling" - poll for every 2 secs
      console.log("API Polling");

      // dispatch an 'Action'
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage() + " 🚀",
        })
      );
    }, 2000);

    // Cleanup fn
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 bg-slate-100 border border-black rounded-lg overflow-y-scroll  flex flex-col-reverse">
        {/* Iterating on ChatMessages data from redux store */}
        {chatMessages.map((cm, index) => {
          // Disclaimer: Don't use indexes as keys
          return (
            <ChatMessage name={cm.name} message={cm.message} key={index} />
          );
        })}
      </div>

      <form
        className="form-container  w-full p-2 ml-2 mt-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault(); // prevents default form behaviour and stops page reloads.

          dispatch(addMessage({ name: "Kumar", message: liveMessage })); // dispatch an Action

          setLiveMessage(""); // clears the input box
        }}
      >
        <input
          className="w-96 px-2 py-1 bg-gray-200"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="mx-2 px-4 py-1 bg-green-100"> Send </button>
      </form>
    </>
  );
};
/*
  <ChatMessage name="Kumar" message="This is one of the greatest trailer" />
  <ChatMessage name="User 1" message="this game have good visuals" />
  <ChatMessage name="User 2" message="waiting for this game to launch" />
  <ChatMessage name="User 3" message="Interesting story gameplay" />
*/

/*
 flex, flex-col-reverse, Unshift() method to 'add items' at starting of the Array.
 * so, latest chat comment gets added on starting top of the Chat UI container.
*/
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

// Redux Store for storing Live Chat.
