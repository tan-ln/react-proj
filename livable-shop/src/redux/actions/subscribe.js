import { SUBSCRIBE, UN_SUBSCRIBE } from "../constants";

const subScribeItem = function (id) {
  return {
    type: SUBSCRIBE,
    id
  }
}

const unSubscribeItem = function (id) {
  return {
    type: UN_SUBSCRIBE,
    id
  }
}

export {
  subScribeItem,
  unSubscribeItem
}
