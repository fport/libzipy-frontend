import React from 'react'
import { Signin } from '../../../assets'
import { Link } from 'react-router-dom'

const Register = ({ history }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault()
    history.push('/login')
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
            </div>
          </div>
          <div className="register-left-mid">
            <form onSubmit={onSubmitHandler} className="register-left-mid-form">
              <div className="register-left-mid-user center">
                <div>
                  <label>Ad</label>
                  <input type="text" placeholder="Osman" required />
                </div>
                <div>
                  <label>Soyad</label>
                  <input type="text" placeholder="Etesam" required />
                </div>
              </div>

              {/* <div className="register-left-mid-gender">
                <div className="register-left-mid-gender-wrapper">
                  <label>Cinsiyet</label>
                  <div className="radio center">
                    <span>
                      <input type="radio" value="Male" name="gender" /> Erkek
                    </span>
                    <span>
                      <input type="radio" value="Female" name="gender" /> Kadın
                    </span>
                  </div>
                </div>
              </div> */}

              <label>Telefon No</label>
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder="553-456-67-89"
                required
              />

              <label>Adres</label>
              <textarea type="text" rows="3" cols="40" required wrap="hard" />

              <div className="register-left-mid-user center">
                <div>
                  <label>Şifre</label>
                  <input
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                    required
                  />
                </div>
                <div>
                  <label>Şifre Onay</label>
                  <input
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                    required
                  />
                </div>
              </div>

              <label>Email</label>
              <input type="email" placeholder="osmanabi@gmail.com" required />

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
