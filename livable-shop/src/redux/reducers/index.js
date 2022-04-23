import { combineReducers } from "redux";
import city from './city'
import search from "./search";
import login from "./login";
import subscribe from "./subscribe";

const rootState = combineReducers({
  city,
  search,
  login,
  subscribe
})

export default rootState
