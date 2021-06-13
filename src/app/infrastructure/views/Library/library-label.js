import React from 'react'

const LibraryInfo = ({ title, value }) => (
  <div className="library-label">
    <span className="library-label-title">{title}</span>
    <span className="library-label-value">{value}</span>
  </div>
)

export default LibraryInfo
