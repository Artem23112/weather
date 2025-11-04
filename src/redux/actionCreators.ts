export const FETCHING_WEATHER = "FETCHING_WEATHER" as const;
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE" as const;

export const fetchingWeatherAC = (payload: any) => ({
  type: FETCHING_WEATHER,
  payload,
});

export const toggleFavoriteAC = (payload: string) => ({
  type: TOGGLE_FAVORITE,
  payload,
});
