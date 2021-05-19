import React from 'react'
import { Signin } from '../../../assets'
import { Link } from 'react-router-dom'

const Login = ({ history }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault()
    history.push('/dashboard/category')
  }

  return (
    <div className="login-container center">
      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-left-top">
            <div className="login-left-top-text">
              <h1>TEKRARDAN HOŞGELDİN</h1>
              <p>
                Henüz hesabın bulunmuyorsa, <Link to="/register">Üye ol!</Link>
              </p>
            </div>
          </div>
          <div className="login-left-mid">
            <form onSubmit={onSubmitHandler} className="login-left-mid-form">
              <label>Email</label>
              <input type="text" placeholder="osmanabi@gmail.com" />
              <label>Şifre</label>
              <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" />
              <button className="btn-lg submit-data" type="submit">
                Giriş Yap
              </button>
            </form>
            <div className="login-left-mid-reset">
              <Link to="/reset-password">Şifreni mi unuttun?</Link>
            </div>
          </div>
          <div className="login-left-bot"></div>
        </div>
        <div className="login-right">
          <img src={Signin} />
        </div>
      </div>
    </div>
  )
}
export default Login
