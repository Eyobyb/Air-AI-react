export type Conversation = {
  content?: string;
  role: ConversationRole;
  air_quality_data: AirQualityData[];
};

export type ConversationRole = "system" | "user" | "assistant";
export type AirQualityData = {
  baqi?: BAQI;
  pollutants?: PollutantDetail[];
  location?: string;
};

export type PollutantDetail = {
  display_name: string;
  full_name: string;
  aqi_information: {
    baqi: BAQI;
  };
  concentration: {
    units: string;
    value: number;
  };
};

export type BAQI = {
  display_name: string;
  aqi: number;
  aqi_display: string;
  color: string;
  category: string;
};
