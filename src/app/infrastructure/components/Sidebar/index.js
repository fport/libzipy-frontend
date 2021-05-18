import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidbar-wrapper">
        <div className="login-user">
          <div className="login-profile">
            <i className="fas fa-user-circle osman" />
            <h6 className="login-text">Üye</h6>
          </div>
          <div className="login-info">
            <h3 className="login-text"> Osman Abi</h3>
            <h6 className="login-text">osmanabi@gmail.com</h6>
          </div>
        </div>

        <div className="nav-item-wrapper">
          <div className="nav-item">
            <Link to="/dashboard/category">
              <i className="fas fa-object-ungroup kolor"></i>
              <span className="link-text">Kategoriler</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/dashboard/library">
              <i className="fas fa-atlas kolor"></i>
              <span className="link-text">Kütüphaneler</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/dashboard/books">
              <i className="fas fa-book kolor"></i>
              <span className="link-text">Kitaplar</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/dashboard/member">
              <i className="fas fa-walking kolor"></i>
              <span className="link-text">Üyeler</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/dashboard/author">
              <i className="fas fa-feather kolor"></i>
              <span className="link-text">Yazarlar</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/dashboard/member-borrow">
              <i className="fas fa-bacon kolor"></i>
              <span className="link-text">Ödünç Aldığım Kitaplar</span>
            </Link>
          </div>
        </div>
        <div className="nav-close">
          <div className="nav-close-content">
            <Link to="/">
              <span className="link-text">Çıkış</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
