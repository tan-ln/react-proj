import { SUBSCRIBE, UN_SUBSCRIBE } from "../constants";

const defaultState = {
  subs: []
}

export default function subscribe (state = defaultState, action) {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        subs: [
          ...state.subs,
          action.id
        ]
      }
    case UN_SUBSCRIBE:
      const curIdx = state.subs.findIndex(item => item === action.id)
      console.log(curIdx);
      return {
        subs: curIdx === false
          ? state.subs
          : state.subs.slice(0, curIdx).concat(state.subs.slice(curIdx + 1))
      }
    default:
      return state
  }
}
