/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../components'
import InfoLabel from './info-label'
import { updateMeDetailsAction } from './actions/creators'

const Me = ({ history }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const [s, setState] = useState({
    update: false
  })
  const meInfo = useSelector((state) => state.domain.info.userInfo)

  const openModel = () => {
    setOpen(true)
  }

  const updateMemeber = () => {
    setState({ ...s, update: !s.update })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      dispatch(
        updateMeDetailsAction(
          meInfo.user_id,
          meInfo.user_name,
          meInfo.user_surname,
          meInfo.user_phonenumber,
          meInfo.user_email,
          password,
          meInfo.user_isadmin
        )
      )
      setState({ ...s, update: !s.update })
    } else {
      setError(true)
    }
  }

  return (
    <>
      {meInfo ? (
        <div className="details-container">
          <div className="details-wrapper">
            <div className="member-info">
              <InfoLabel
                className="member-info-item"
                title={'Isim Soyisim'}
                value={`${meInfo.user_name} ${meInfo.user_surname}`}
              />
              <InfoLabel title={'Email'} value={`${meInfo.user_email}`} />
              <InfoLabel title={'Telefon Numarasi'} value={`${meInfo.user_phonenumber}`} />
            </div>
            {s.update ? (
              <Modal closeModal={() => updateMemeber()}>
                {error ? <h2>Şifreniz birbiri ile uyuşmuyor 👻.</h2> : null}
                <form onSubmit={submitHandler}>
                  <h4>Yeni Şifrenizi Giriniz</h4>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <h4>Yeni Sifre Onay</h4>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button type="submit">Guncelle</button>
                </form>
              </Modal>
            ) : null}
            <div className="details-footer">
              <span className="details-text">Şifrenizi güncellemek ister misiniz ?</span>
              <div className="options">
                <button className="btn-sm details-btn" onClick={updateMemeber}>
                  Guncelle
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'yukleniyor'
      )}
    </>
  )
}

export default Me
