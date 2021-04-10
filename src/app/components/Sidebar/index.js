import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Link to="/dashboard/about">About</Link>
    </div>
  )
}

export default Sidebar
