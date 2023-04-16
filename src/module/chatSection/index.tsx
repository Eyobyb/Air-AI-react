import React, { useContext, useEffect, useRef } from "react";

import SearcInputField from "./components/SearchInputField";
import ChatBox from "../chatBox";

import img_url from "../../imgs/pollution.jpg";
import { ChatContext } from "../../context/chatContext";
import { Conversation } from "../../types";
const ChatSection = () => {
  const { chatList, addChat } = useContext(ChatContext);
  const messagesEnd = useRef(null);

  const scrollDown = () => {
    let scroll: any = messagesEnd?.current;
    scroll.scrollIntoView();
  };

  useEffect(() => {
    scrollDown();
  }, [chatList, addChat]);
  return (
    <div className="w-full  rounded-l-2xl flex flex-col ">
      <div className="px-10 py-5  flex flex-col h-full justify-end">
        {chatList.length > 0 ? (
          <div className="h-full overflow-y-scroll overflow-x-hidden scrollbar-hide w-full">
            {chatList.map((e: Conversation, index) => {
              return (
                <div className="mb-10" key={index}>
                  <ChatBox data={e} />
                </div>
              );
            })}
            <div ref={messagesEnd}> </div>
          </div>
        ) : (
          <div
            ref={messagesEnd}
            className="w-full h-full flex   justify-center items-center"
          >
            <div className="relative ">
              <div className="flex flex-col gap-3 justify-between ">
                <img
                  src={img_url}
                  className="rounded-xl min-w-[300px] w-full opacity-5"
                  alt="ai avatar"
                />

                <div className="absolute w-full h-full flex justify-center items-center text-green-400 font-extrabold text-5xl">
                  Talk with <span>AirAI</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <SearcInputField
          onQuery={(value: string) => {
            if (value)
              addChat({ role: "user", content: value, air_quality_data: [] });
          }}
        />
      </div>
    </div>
  );
};

export default ChatSection;
