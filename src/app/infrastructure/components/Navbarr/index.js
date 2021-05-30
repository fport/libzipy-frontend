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
          <button className="btn-md navbar-button">
            <Link to="/library">
              <i className="fas fa-home" style={{ marginRight: '0.5rem' }}></i>
              Kütüphaneler
            </Link>
          </button>
          <button className="btn-md navbar-button">
            <Link to="/books">
              <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i>Kitaplar
            </Link>
          </button>
          <button className="btn-md navbar-button">
            <Link to="/author">
              <i className="fas fa-bookmark" style={{ marginRight: '0.5rem' }}></i>Yazarlar
            </Link>
          </button>
          <button className="btn-md navbar-button">
            <Link to="/login">
              <i className="fas fa-bolt" style={{ marginRight: '0.5rem' }}></i>
              {selectedData.userInfo.user_id ? 'Dashboard' : 'Giriş Yap'}
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbars
