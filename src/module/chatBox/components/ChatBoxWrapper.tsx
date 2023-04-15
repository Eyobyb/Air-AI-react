import React, { ReactElement } from "react";
import botAvatar from "../../../imgs/Ai-avatar.png";
import personAvatar from "../../../imgs/userAvatar.png";
const ChatBoxWrapper = ({
  mainContent,
  isBot,
}: {
  mainContent: ReactElement;
  isBot?: boolean;
}) => {
  const ownerSideLeft = isBot;
  return (
    <>
      <div className="relative max-w-full w-full">
        <div
          className="p-5 pb-12  bg-background rounded-2xl shadow-lg "
          style={{ boxShadow: "0px 0px 9px #ffffff06" }}
        >
          {mainContent}
        </div>
        <div
          style={!ownerSideLeft ? { left: "1.25rem" } : { right: "1.25rem" }}
          className="absolute  -bottom-6 h-14 w-14 rounded-xl grid items-center shadow-lg "
        >
          <img
            src={
              !isBot ? personAvatar: botAvatar
            }
            className="rounded-xl"
            alt="ai avatar"
            width={100}
            height={100}
          />
        </div>
        <div
          style={{
            maxWidth: "calc(100% - 4.8rem)",
            float: `${ownerSideLeft ? "left" : "right"}`,
          }}
        ></div>
      </div>
    </>
  );
};

export default ChatBoxWrapper;
