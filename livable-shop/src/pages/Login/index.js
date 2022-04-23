import React from "react";
import { useDispatch } from 'react-redux'
import * as loginActions from '../../redux/actions/login'
import LoginView from "./LoginView";
import './index.scss'

export default function Login () {
  const dispatch = useDispatch()
  const handleLogin = (userInfo) => {
    dispatch(loginActions.login(userInfo))
    window.history.back()
  }
  return (
    <div className="login__wrapper">
      <LoginView onLoginResolve={ handleLogin } />
    </div>
  )
}
