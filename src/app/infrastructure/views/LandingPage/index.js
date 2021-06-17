/* eslint-disable */
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navbarr, Footer } from '../../components'
import { libraryLanding } from '../../../assets'
import LandingTopContent from './landing-top-content'
import LandingMidContent from './landing-mid-content'
import LandingBotContent from './landing-bot-content'

const LandingPage = () => {
  return (
    <>
      <Navbarr />
      <div className="landing-container">
        <LandingTopContent />
        <LandingMidContent />
        <LandingBotContent />
      </div>
      <Footer />
    </>
  )
}

export default LandingPage
