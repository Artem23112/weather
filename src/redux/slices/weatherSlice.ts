import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  chosenCity: string;
  geoTried: boolean;
  favorites: string[];
};

const initialState: InitialState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]") as string[],
  chosenCity: "",
  geoTried: false,
};

export const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {
    setCity: (state, { payload }: PayloadAction<string>) => {
      state.chosenCity = payload;
    },
    toggleFavorite: (state, { payload }: PayloadAction<string>) => {
      if (state.favorites.includes(payload)) {
        state.favorites = state.favorites.filter(
          (cityName) => cityName !== payload,
        );
      } else state.favorites.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const weatherSliceReducer = weatherSlice.reducer;
