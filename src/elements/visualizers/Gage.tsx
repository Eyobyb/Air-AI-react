import React, { ReactElement } from "react";

const Gauge = ({
  value,
  bgColor,
  conicColorMain = "#1e293b",
  conicColorSecond = "gray",
  children,
}: {
  value: number;
  children?: ReactElement;
  bgColor?: string;
  conicColorMain?: string;
  conicColorSecond?: string;
}) => {
  return (
    <div
      className="w-20 h-20 rounded-full flex justify-center items-center min-h-32 min-w-32 "
      style={{
        background: `conic-gradient(${conicColorSecond} 0% ${value}%,${conicColorMain}  ${value}% 100%)`,
      }}
    >
      <div className="w-16 h-16 rounded-full min-h-24 min-w-24 flex flex-col justify-center items-center bg-background text-white">
        {value}
      </div>
    </div>
  );
};

export default Gauge;
