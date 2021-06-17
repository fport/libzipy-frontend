import React from 'react'
import { Link } from 'react-router-dom'
import { libzipy } from '../../../assets'
import { useSelector } from 'react-redux'

const Navbars = () => {
  const selectedData = useSelector((data) => data.domain.info)

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-content-left">
          <Link to="/">
            <img className="logo" src={libzipy} />
          </Link>
        </div>
        <div className="navbar-content-right">
          <Link to="/library">
            <button className="btn-md navbar-button">
              <i className="fas fa-home" style={{ marginRight: '0.5rem' }}></i>
              Kütüphaneler
            </button>
          </Link>
          <Link to="/books">
            <button className="btn-md navbar-button">
              <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i>Kitaplar
            </button>
          </Link>
          <Link to="/author">
            <button className="btn-md navbar-button">
              <i className="fas fa-bookmark" style={{ marginRight: '0.5rem' }}></i>Yazarlar
            </button>
          </Link>
          <Link to="/login">
            <button className="btn-md navbar-button">
              <i className="fas fa-bolt" style={{ marginRight: '0.5rem' }}></i>
              {selectedData.userInfo.user_id ? 'Dashboard' : 'Giriş Yap'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbars
