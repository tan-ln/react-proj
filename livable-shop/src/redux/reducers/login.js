import { _LOGIN, _LOGOUT } from "../constants"

const defaultState = {
  userInfo: {
    token: '',
    username: ''
  }
}

export default function login (state = defaultState, action) {
  switch (action.type) {
    case _LOGIN:
      return {
        userInfo: action.userInfo
      }
    case _LOGOUT:
      return {
        userInfo: {
          token: '',
          username: ''
        }
      }
    default:
      return state
  }
}
