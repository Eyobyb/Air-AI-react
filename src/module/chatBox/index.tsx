import React from "react";
import ChatBoxWrapper from "./components/ChatBoxWrapper";

import AirQualityViewer from "./components/AirQualityViewer";
import { Conversation } from "../../types";

const ChatBox = ({ data }: { data: Conversation }) => {
  return (
    <>
      <ChatBoxWrapper
        mainContent={
          <div className="">
            <div className="text-gray-400 overflow-wrap break-word; mb-3">
              {data.content}
            </div>

            {/* {data.pollutants ? (
              <div className="flex flex-wrap gap-1 bg-black py-4 rounded-3xl bg-opacity-10">
                {Object.keys(data.pollutants).map((key, index) => {
                  if (data.pollutants && data.pollutants[key]) {
                    const pollutant = data.pollutants[key] as PollutantDetail;
                    return <GageWithDescription key={index} data={pollutant} />;
                  }
                })}
              </div>
            ) : (
              <></>
            )} */}

            {data.air_quality_data ? (
              <div className="flex flex-col w-full gap-2  ">
                {data.air_quality_data.map((value, key) => {
                  return (
                    <div key={key}>
                      <AirQualityViewer data={value} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        }
        isBot={data.role === "assistant"}
      />
    </>
  );
};

export default ChatBox;
