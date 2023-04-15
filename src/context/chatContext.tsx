"use client";

import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../utility/axios_instance";
import { AirQualityData, Conversation, ConversationRole, PollutantDetail } from "../types";

export const ChatContext = createContext<{
  chatList: any[];
  addChat: (e: Conversation) => void;
  loading: boolean;
  setLoading: (e: boolean) => void;
}>({
  chatList: [],
  addChat: () => undefined,
  loading: false,
  setLoading: () => undefined,
});

const ChatContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [chatList, setchatList] = useState<Conversation[]>([]);
  const [session, setSession] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(()=>{

  },[session])

  const addChat = async (value: Conversation) => {

    setLoading(true);
    setchatList((e) => {
      return [...e, value];
    });
    let result = await axiosInstance
      .post("/", {
        user_input: value.content,
        session_id: session,
      })
      .finally(() => {
        setLoading(false);
      });

    const convo_data: any = await result.data;


    const aqi_quality = convo_data.air_quality_data;
    let list_of_air_quality: AirQualityData[] = [];
    if(convo_data.session_id) setSession(convo_data.session_id)


    if (aqi_quality) {
      list_of_air_quality = aqi_quality
        ? aqi_quality.map((e: any) => {
            let value: AirQualityData = {
              location: e.location,
              baqi: (e.data && e.data.indexes && e.data.indexes.baqi) || {},
              pollutants: (e.data && e.data.pollutants
                ? [...Object.values(e.data.pollutants)]
                : []) as PollutantDetail[],
            };
            return value;
          })
        : [];
    }
    const chat_data: Conversation = {
      role: convo_data.role as ConversationRole,
      content: convo_data.content,
      air_quality_data: list_of_air_quality as AirQualityData[],
    };

    setchatList((e) => {
      return [...e, chat_data];
    });
  };

  return (
    <ChatContext.Provider value={{ chatList, addChat, loading, setLoading }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextWrapper;
