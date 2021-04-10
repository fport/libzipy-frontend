import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import './style.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="login-user">
        <i className="fas fa-user-circle osman"></i>
        <div className="login-info">
          <h3 className="links"> Osman Abi</h3>
          <h6 className="links">osmanabi@gmail.com</h6>
        </div>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/about">
          <i className="fas fa-object-ungroup kolor"></i>
          <span className="links">Kategoriler</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/about">
          <i className="fas fa-atlas kolor"></i>
          <span className="links">Kütüphaneler</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/about">
          <i className="fas fa-book kolor"></i>
          <span className="links">Kitaplar</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/about">
          <i className="fas fa-walking kolor"></i>
          <span className="links">Üyeler</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/about">
          <i className="fas fa-feather kolor"></i>
          <span className="links">Yazarlar</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
