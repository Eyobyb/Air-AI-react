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
            className="w-full h-full flex items-center justify-center"
          >
            <div className="flex flex-col gap-3">
              <div>
                <div className="text-center font-extrabold text-7xl">
                  Talk with <span>AirAI</span>
                </div>
              </div>
       
              <img src={img_url} className="rounded-xl" alt="ai avatar" />
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
