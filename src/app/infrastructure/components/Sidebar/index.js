/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../views/LoginPage/actions/creators'

const Sidebar = ({ history }) => {
  const selectedData = useSelector((data) => data.domain.info.userInfo)
  const dispatch = useDispatch()

  const onCloseHandle = () => {
    dispatch(logout({}))
    history.push('/')
  }

  return (
    <div className="sidebar-container">
      <div className="sidbar-wrapper">
        <div className="login-user">
          <div className="login-profile">
            <i className="fas fa-user-circle osman" />
            <h6 className="login-text">
              {selectedData ? (selectedData.user_isadmin == 1 ? 'Admin' : 'Üye') : ''}
            </h6>
          </div>
          <div className="login-info">
            <h3 className="login-text">
              {selectedData ? `${selectedData.user_name} ${selectedData.user_surname}` : ''}
            </h3>
            <h6 className="login-text">{selectedData.user_email ? selectedData.user_email : ''}</h6>
          </div>
        </div>

        <div className="nav-item-wrapper">
          <div className="nav-item">
            <Link to="/dashboard/library">
              <i className="fas fa-object-ungroup kolor"></i>
              <span className="link-text">Kütüphaneler</span>
            </Link>
          </div>

          {selectedData.user_isadmin == 1 ? (
            <div className="nav-item">
              <Link to="/dashboard/member">
                <i className="fas fa-walking kolor"></i>
                <span className="link-text">Üyeler</span>
              </Link>
            </div>
          ) : null}

          <div className="nav-item">
            <Link to="/dashboard/books">
              <i className="fas fa-book kolor"></i>
              <span className="link-text">Kitaplar</span>
            </Link>
          </div>

          <div className="nav-item">
            <Link to="/dashboard/author">
              <i className="fas fa-feather kolor"></i>
              <span className="link-text">Yazarlar</span>
            </Link>
          </div>
          {selectedData.user_isadmin == 0 ? (
            <>
              <div className="nav-item">
                <Link to="/dashboard/member-borrow">
                  <i className="fas fa-bacon kolor"></i>
                  <span className="link-text">Ödünç Aldığım Kitaplar</span>
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/dashboard/me">
                  <i className="fas fa-bacon kolor"></i>
                  <span className="link-text">Bilgilerim</span>
                </Link>
              </div>
            </>
          ) : null}
        </div>
        <div className="nav-close">
          <div className="nav-close-content">
            <button className="nav-close-content-button" onClick={onCloseHandle}>
              Cikis Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
