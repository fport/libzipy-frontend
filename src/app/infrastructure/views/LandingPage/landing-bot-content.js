import React from 'react'
import { Link } from 'react-router-dom'

const LandingBotContent = () => {
  return (
    <div className="landing-container-bot">
      <div className="landing-bot-wrapper">
        <h1>
          <span className="porti">Kütüphaneler</span> kültür evleridir.
        </h1>
        <h3>Evimze misafir olmak ister misin ?</h3>
        <button className="btn-lg landing-button">
          <Link to="/register">
            Aramıza katıl
            <i
              className="fas fa-rocket"
              style={{ textAlign: 'center', marginLeft: '0.5rem', fontSize: '1rem' }}
            ></i>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default LandingBotContent
