import { Link } from 'react-router-dom'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { libzipy } from '../../assets'
import './style.css'

const Navbars = () => {
  return (
    <>
      <Navbar className="navbar" variant="light" expand="lg" sticky="top">
        <Navbar.Brand className="link" href="/">
          <img src={libzipy} className="logo" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="link" href="/main">
              Dava Listele
            </Nav.Link>
            <Nav.Link className="link" href="/add">
              Dava Ekle
            </Nav.Link>
          </Nav>
          <Form inline>
            <Link to="/dashboard">
              <button className="logout link">Go to dashboard</button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navbars
