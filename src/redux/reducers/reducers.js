import { FETCHING_WEATHER, TOGGLE_FAVOUTITE } from "../actionCreators";

const initialState = {
    weatherInfo: null,
    favouriteCities: null
}

export function reducer(state = initialState, action){
    switch (action.type) {
        case FETCHING_WEATHER:

            return { ...state, weatherInfo: [] }
        case TOGGLE_FAVOUTITE:
            return  {...state, favouriteCitites: []}
        default:
            return state;
    }
}