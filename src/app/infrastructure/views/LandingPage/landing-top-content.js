import React from 'react'
import { Link } from 'react-router-dom'
import { libraryLanding } from '../../../assets'

const LandingTopContent = () => {
  return (
    <div className="landing-container-top">
      <div className="landing-content-left">
        <div className="landing-content-left-center">
          <h1>
            <span className="libzipy">Libzipy'e</span> Hoşgeldin
          </h1>
          <p>Kitaplar ödünç alabilir, yazarlarıyla birebir görüşme fırsatı yakalayabilirsin. 🎉.</p>
          <button className="btn-lg landing-button">
            <Link to="/register">
              Hemen üye ol
              <i
                className="fas fa-play"
                style={{ textAlign: 'center', marginLeft: '0.5rem', fontSize: '1rem' }}
              ></i>
            </Link>
          </button>
        </div>
      </div>
      <div className="landing-content-right">
        <img className="landing-content-right-img lp-content-image" src={libraryLanding} />
      </div>
    </div>
  )
}

export default LandingTopContent
