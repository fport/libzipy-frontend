import { Link } from 'react-router-dom'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { libzipy } from '../../assets'
import './style.css'

const Navbars = () => {
  return (
    <>
      <Navbar className="navbar" variant="light" expand="lg" sticky="top">
        <Navbar.Brand className="link" href="/">
          <img src={libzipy} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/release">
              <span className="nav-el">Kütüphaneler</span>
            </Link>
            <Link to="/release">
              <span className="nav-el">Kitaplar</span>
            </Link>
            <Link to="/release">
              <span className="nav-el">Yazarlar</span>
            </Link>
          </Nav>
          <Form inline>
            <Link to="/login">
              <button className="logout link">
                Giriş Yap<i className="fas fa-feather-alt"></i>
              </button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navbars
