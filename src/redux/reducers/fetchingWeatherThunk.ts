import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState, Action } from "./reducers";
import { fetchingWeatherAC } from "../actionCreators";

// пример типа ответа
export type WeatherResponse = any;

type AppThunk<R = Promise<WeatherResponse | void>> =
  ThunkAction<R, RootState, unknown, Action>;

export const fetchingWeatherThunk = (name: string): AppThunk => {
  return async (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(name)}&lang=ru&units=metric&appid=8e3a2108b9612ef79037e984cab2f7d1`
      );
      const json: WeatherResponse = await res.json();
      dispatch(fetchingWeatherAC(json));
      return json;
    } catch (err) {
      dispatch({ type: "ERROR_FETCHING", error: err });
    }
  };
};

export default fetchingWeatherThunk;
