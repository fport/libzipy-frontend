import React from 'react'

const Footer = () => {
  const nowDate = new Date().getFullYear()
  return <div className="footer-container">© Copyright {nowDate} - Libzipy | 2 Porsiyon Kod</div>
}

export default Footer
