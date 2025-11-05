import { apiKey } from "@/assets/constants";
import type { Geo } from "@/assets/types/geo";
import type { WeatherResponse } from "@/assets/types/weatherResponse";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi2_5v = createApi({
  reducerPath: "weatherApi2_5v",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<WeatherResponse, string>({
      query: (city) => {
        if (!city) city = "Кишинев";
        return `weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;
      },
    }),
  }),
});

export const weatherApi3_0v = createApi({
  reducerPath: "weatherApi3_0v",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/3.0/",
  }),
  endpoints: (builder) => ({
    getWeatherByCoords: builder.query<{ message: string }, Geo>({
      query: ({ lat, lon }) => ({
        url: "onecall",
        params: {
          lat,
          lon,
          appid: apiKey,
          units: "metric",
          exclude: "minutely",
        },
      }),
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi2_5v;
export const { useGetWeatherByCoordsQuery } = weatherApi3_0v;
