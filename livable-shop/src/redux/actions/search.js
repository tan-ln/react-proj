import { UPDATE_SEARCH } from "../constants";

const updateSearchValue = function (searchValue) {
  return {
    type: UPDATE_SEARCH,
    searchValue
  }
}

export {
  updateSearchValue
}
