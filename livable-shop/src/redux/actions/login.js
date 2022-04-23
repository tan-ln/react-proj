import { _LOGIN, _LOGOUT } from "../constants"

const login = (userInfo) => {
  return {
    type: _LOGIN,
    userInfo
  }
}

const logout = () => {
  return {
    type: _LOGOUT
  }
}

export {
  login,
  logout
}
