import React, { useState } from "react";
import api from "../../../api";
import './index.scss'

export default function LoginView({ onLoginResolve }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleInputChange = (e) => {
    if (!e.target.name) return
    e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api.doLogin({ username, password }).then(res => {
      if (res.data.status === 200) {
        // 登录成功
        const userInfo = {
          token: res.data.token,
          username
        }
        onLoginResolve(userInfo)
      }
    })
  }

  return (
    <div className="login__view">
      <div className="login__view--title">
        <h2>Login Page</h2>
      </div>
      <form className="login__view--form" onSubmit={ handleSubmit }>
        <div className="login__input--content">
          <label>
            <input type="username" placeholder="用户名" name="username" required value={ username } onChange={ handleInputChange } />
          </label>
          <label>
            <input type="password" placeholder="密码" name="password" required value={ password } onChange={ handleInputChange } />
          </label>
        </div>
        <div className="login__btn">
          <button type="submit" className="login__enter--btn" >登录</button>
        </div>
        <div className="login__bottom">
          <span className="login__bottom--left">忘记密码 ?</span>
          <span className="login__bottom--right">注册账户</span>
        </div>
      </form>
    </div>
  )
}
