import { Navbarr } from '../components'
import { libraryLanding } from '../assets'
import './LandingPage.css'
import { Button } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <>
      <Navbarr />
      <div className="lp-container">
        <div className="lp-content">
          <div className="lp-right-content">
            <h1>Libzipy'e Hoşgeldin</h1>
            <br />
            <h6>Kitaplar ödünç alabilir, yazarlarıyla birebir görüşme fırsatı yakalayabilirsin.</h6>
            <br />
            <Button variant="danger">
              Hemen üye ol<i class="fab fa-angellist"></i>
            </Button>
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
