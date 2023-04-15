import React, { ReactElement } from "react";

const IconButtonWrapper = ({
  children,
  onClick,
}: {
  children: ReactElement;
  onClick: () => void;
}) => {
  return (
    <button
      className="p-2 rounded-lg bg-primary hover:bg-opacity-95 active:bg-opacity-90 z-10 cursor-pointer opacity-70 hover:opacity-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButtonWrapper;
