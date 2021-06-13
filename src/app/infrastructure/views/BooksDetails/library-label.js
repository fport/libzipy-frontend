import React from 'react'

const InfoLabel = ({ title, value }) => (
  <div className="info-label">
    <span className="info-label-title">{title}</span>
    <span className="info-label-value">{value}</span>
  </div>
)

export default InfoLabel
