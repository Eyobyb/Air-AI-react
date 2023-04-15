import React from "react";
import IconButtonWrapper from "../warppers/IconButtonWrapper";
import Send from "../icons/Send";

const SendButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButtonWrapper onClick={onClick}>
      <Send />
    </IconButtonWrapper>
  );
};

export default SendButton;
