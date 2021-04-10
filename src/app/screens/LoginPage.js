import './LoginScreen.css'
import { libraryLogin } from '../assets'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
  return (
    <>
      <div className="l-container">
        <div className="l-left">
          <img className="l-img" src={libraryLogin} alt="library login" />
        </div>
        <div className="l-right">
          <div className="l-right-container">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-Posta</Form.Label>
                <Form.Control className="bg-form" type="email" placeholder="E-Postanı gir." />
                <Form.Text className="text-muted">
                  E-postanızı asla başkalarıyla paylaşmayacağız.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Şifre</Form.Label>
                <Form.Control className="bg-form" type="password" placeholder="Şifreni gir." />
              </Form.Group>
              <Button className="bt-color" type="submit">
                Giriş<i class="fas fa-angle-double-right"></i>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
