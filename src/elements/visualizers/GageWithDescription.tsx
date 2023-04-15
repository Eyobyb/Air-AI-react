
import React from "react";
import Gauge from "./Gage";
import { PollutantDetail } from "../../types";

const GageWithDescription = ({ data }: { data: PollutantDetail }) => {
  return (
    <div
      className="w-full p-2  bg-[#16161b]   rounded-2xl flex justify-between"
      style={{ maxWidth: "285px" }}
    >
      <div className="flex flex-col pl-2 justify-center">
        <div>
          <p className="text-white font-bold">
            {data.display_name}{" "}
            <span className=" font-normal text-xs text-gray-400">
              {data.full_name}
            </span>
          </p>
        </div>
        <div>
          <p className="font-bold text-white">
            {data.aqi_information.baqi.category}
          </p>
        </div>
        <div>
          <p>{data.aqi_information.baqi.aqi_display}</p>
        </div>
      </div>
      <div className="flex h-full items-center">
        <Gauge
          value={data.aqi_information.baqi.aqi}
          conicColorSecond={data.aqi_information.baqi.color}
        />
      </div>
    </div>
  );
};

export default GageWithDescription;
