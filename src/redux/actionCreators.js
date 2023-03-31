export const TOGGLE_FAVOUTITE = 'TOGGLE_FAVOUTITE';
export const FETCHING_WEATHER = 'FETCHING_WEATHER';

export const toggleFavouriteAC = (payload) => {
    return {
        type: TOGGLE_FAVOUTITE,
        payload
    }
}

export const fetchingWeatherAC = (payload) => {
    return {
        type: FETCHING_WEATHER,
        payload
    }
}