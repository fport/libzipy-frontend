import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
  return (
    <div
      className="sidebar-container"
      style={{ width: '300px', background: 'red', height: '100vh' }}
    >
      <Link to="/dashboard/about">About</Link>
    </div>
  )
}

export default Sidebar
