import React from 'react'
import { Anabir, Anaiki } from '../../../assets'

const LandingMidContent = () => {
  return (
    <div className="landing-container-mid">
      <div className="landing-wrapper">
        <div className="landing-content-one">
          <img className="landing-content-one-img" src={Anabir} />
          <div className="landing-content-one-right">
            <div className="landing-content-one-right-empty"></div>
            <div className="landing-content-one-right-content">
              <h2 className="option-card-title center">Ödünç Alma Sistemi</h2>
              <span className="content-text">
                <div className="random">
                  <i className="fas fa-random icon-color"></i>
                </div>
                ⤳ Giriş yaparak kütüphaneleri bakabilir, detaylarını inceleyebilirsiniz.
              </span>
            </div>
          </div>
        </div>
        <div className="landing-content-two">
          <div className="landing-content-two-left">
            <div className="landing-content-two-left-content">
              <div className="option-card">
                <div className="option-card-wrapper">
                  <h2 className="option-card-title">Ödünç Alma Sistemi</h2>
                  <p className="option-card-description">
                    Kitapların detaylarına inerek onları ödünç alabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
            <div className="landing-content-two-left-empty"></div>
          </div>
          <img className="landing-content-two-img" src={Anaiki} />
        </div>
      </div>
    </div>
  )
}

export default LandingMidContent
