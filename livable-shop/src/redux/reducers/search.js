import { UPDATE_SEARCH } from "../constants";

const defaultState = {
  searchValue: ''
}

export default function search (state = defaultState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        searchValue: action.searchValue
      }
    default:
      return state
  }
}