import { FETCHING_WEATHER, TOGGLE_FAVORITE } from "../actionCreators"

export type Weather = any; // заменить на реальную модель

export type State = {
  weatherInfo: Weather[] | null;
  favoriteCities: string[] | null;
};

export type Action =
  | { type: typeof FETCHING_WEATHER; payload: Weather[] }
  | { type: typeof TOGGLE_FAVORITE; payload: string }
  | { type: "ERROR_FETCHING"; error?: unknown };

const initialState: State = {
  weatherInfo: null,
  favoriteCities: null,
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case FETCHING_WEATHER:
      return { ...state, weatherInfo: action.payload ?? [] };
    case TOGGLE_FAVORITE: {
      const city = action.payload;
      const current = state.favoriteCities ?? [];
      const exists = current.includes(city);
      return {
        ...state,
        favoriteCities: exists ? current.filter(c => c !== city) : [...current, city],
      };
    }
    case "ERROR_FETCHING":
      return state;
    default:
      return state;
  }
}

export type RootState = ReturnType<typeof reducer>;
