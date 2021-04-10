import { useState } from 'react'
import './LoginScreen.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className="login-screen">
        <form className="login-screen__form">
          <h3 className="login-screen__title">Login</h3>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="input-box"
              type="email"
              required
              id="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              tabIndex={1}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              className="input-box"
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={2}
            />
          </div>
          <button type="submit" className="btn but">
            Login
          </button>
        </form>
      </div>
    </>
  )
}
export default Login
