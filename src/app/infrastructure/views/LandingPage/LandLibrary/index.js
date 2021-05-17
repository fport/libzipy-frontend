import React from 'react'
import { Navbarr } from '../../../components'
import { Spinner } from 'react-bootstrap'

const LandLibrary = () => {
  return (
    <>
      <Navbarr />
      <div>
        <div>
          <Spinner animation="grow" variant="warning" />
          KÜTÜPHANELER SAYFASI EKLENCEK
        </div>
      </div>
    </>
  )
}

export default LandLibrary
