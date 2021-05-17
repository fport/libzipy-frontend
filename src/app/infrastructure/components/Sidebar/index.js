import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="login-user">
        <div className="login-profile">
          <i className="fas fa-user-circle osman" />
          <h6 className="linkz">Üye</h6>
        </div>
        <div className="login-info">
          <h3 className="links"> Osman Abi</h3>
          <h6 className="links">osmanabi@gmail.com</h6>
        </div>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/category">
          <i className="fas fa-object-ungroup kolor"></i>
          <span className="links">Kategoriler</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/library">
          <i className="fas fa-atlas kolor"></i>
          <span className="links">Kütüphaneler</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/books">
          <i className="fas fa-book kolor"></i>
          <span className="links">Kitaplar</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/member">
          <i className="fas fa-walking kolor"></i>
          <span className="links">Üyeler</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/author">
          <i className="fas fa-feather kolor"></i>
          <span className="links">Yazarlar</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/dashboard/member-borrow">
          <i className="fas fa-bacon kolor"></i>
          <span className="links">Ödünç Aldığım Kitaplar</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/">
          <i className="fas fa-window-close kolor"></i>
          <span className="links">Çıkış</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
