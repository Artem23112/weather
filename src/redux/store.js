import thunk from 'react-thunk';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers/reducers'
import fetchingWeatherThunk from './reducers/fetchingWeatherThunk'

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware(fetchingWeatherThunk));


export default store;