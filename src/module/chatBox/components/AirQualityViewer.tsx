
import React from "react";
import Gauge from "../../../elements/visualizers/Gage";
import { AirQualityData } from "../../../types";

const AirQualityViewer = ({ data }: { data: AirQualityData }) => {
  return (
    <div className="flex gap-2 w-full text-gray-400  p-2  rounded-md items-center bg-black bg-opacity-20">
      <div>
        <Gauge
          value={data.baqi?.aqi || 0}
          conicColorSecond={data.baqi?.color}
        />
      </div>

      <div className="whitespace-nowrap">
        <div className="font-bold">{data.location}</div>
        <p style={{ color: data.baqi?.color }}>{data.baqi?.category}</p>
      </div>
      <div className="overflow-x-auto flex flex-wrap justify-center gap-2 scroll-hiden h-full ">
        {data.pollutants ? (
          data.pollutants.map((e, key) => {
            return (
              <div className="flex gap-2 items-center h-full" key={key}>
                <p className="font-extrabold text-sm">{e.display_name}</p>
                <div className="text-xs whitespace-nowrap">
                  <p className="inline-block">{e.concentration.value}</p>
                  <span>{e.concentration.units}</span>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AirQualityViewer;
