import { combineReducers } from "redux";
import city from './city'
import search from "./search";

const rootState = combineReducers({
  city,
  search
})

export default rootState
