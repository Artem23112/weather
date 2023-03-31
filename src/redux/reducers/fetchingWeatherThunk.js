import {fetchingWeatherAC} from '../actionCreators/';

const fetchingWeatherThunk = (name) => (dispatch) => {

    return fetch(`api.openweathermap.org/data/2.5/weather?q=${name}&lang=ru&units=metric&appid=f734bcd0aa69e6fa77b9b0f0487a98c7`)
        .then(res => {
            return res.json();
        })
        .then(JSONres => {
            dispatch(fetchingWeatherAC(JSONres));
            return JSONres;
        })
        .catch(err => {
            dispatch({ type: 'ERROR_FETCHING', error: err });
        })

}

export default fetchingWeatherThunk;