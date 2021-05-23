import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Signin } from '../../../assets'
import { Link } from 'react-router-dom'
import { userRegisterActions } from './actions/creators'

const Register = ({ history }) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  // const [adress, setAdress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Password do not  match')
    } else {
      const castingPhone = parseInt(phone)
      dispatch(userRegisterActions(name, surname, castingPhone, email, password))
      history.push('/login')
    }
  }

  return (
    <div className="register-container center">
      <div className="register-wrapper">
        <div className="register-left">
          <div className="register-left-top">
            <div className="register-left-top-text">
              <h1>HEYECANLI MISIN ?</h1>
              <p>
                Hesabın bulunuyorsa, <Link to="/login">Giriş Yap!</Link>
              </p>
              {message && <h1>{message}</h1>}
            </div>
          </div>
          <div className="register-left-mid">
            <form onSubmit={onSubmitHandler} className="register-left-mid-form">
              <div className="register-left-mid-user center">
                <div>
                  <label>Ad</label>
                  <input
                    type="text"
                    placeholder="Osman"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Soyad</label>
                  <input
                    type="text"
                    placeholder="Etesam"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                  />
                </div>
              </div>

              <label>Telefon No</label>
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder="553-456-67-89"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              {/* <label>Adres</label>
              <textarea
                type="text"
                wrap="hard"
                rows="3"
                cols="40"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                required
              /> */}

              <div className="register-left-mid-user center">
                <div>
                  <label>Şifre</label>
                  <input
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Şifre Onay</label>
                  <input
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <label>Email</label>
              <input
                type="email"
                placeholder="osmanabi@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button className="btn-lg submit-data" type="submit">
                Üye Ol
              </button>
            </form>
          </div>
          <div className="register-left-bot"></div>
        </div>
        <div className="register-right">
          <img src={Signin} />
        </div>
      </div>
    </div>
  )
}
export default Register
