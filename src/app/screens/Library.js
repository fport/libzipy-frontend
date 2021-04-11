import { useState } from 'react'
import { Drawer } from '../components'
import './Library.css'
import { InputGroup, FormControl } from 'react-bootstrap'

const Library = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Kapat' : 'Aç'}</button>
      <div className="drawer">
        {isOpen ? (
          <Drawer>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Drawer>
        ) : null}
      </div>
    </div>
  )
}

export default Library
