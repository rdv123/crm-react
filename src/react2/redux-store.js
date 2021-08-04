import { combineReducers, createStore } from "redux";
import projektReducer from "./profile-reducer"

let reducers = combineReducers(
    {projektData: projektReducer}
)

let store = createStore(reducers);

export default store