import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { reducer } from "./reducers/reducers"

const store = createStore(reducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store