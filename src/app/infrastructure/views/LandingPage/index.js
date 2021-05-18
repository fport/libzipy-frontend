import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navbarr } from '../../components'
import { libraryLanding } from '../../../assets'

const LandingPage = () => {
  return (
    <>
      <Navbarr />
      <div className="lp-container">
        <div className="lp-content">
          <div className="lp-right-content">
            <h1>
              <span className="libzipy">Libzipy'e</span> Hoşgeldin
            </h1>
            <br />
            <h6>Kitaplar ödünç alabilir, yazarlarıyla birebir görüşme fırsatı yakalayabilirsin.</h6>
            <br />
            <Link to="/register">
              <Button variant="danger">
                Hemen üye ol<i className="fab fa-angellist"></i>
              </Button>
            </Link>
          </div>
          <div className="lp-left-content">
            <img src={libraryLanding} className="lp-content-image" alt="content library" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
