/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMemberDetailsActions } from './actions/creators'
import { useParams } from 'react-router-dom'
import { Modal } from '../../components'

const MemberDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [s, setState] = useState({
    del: false,
    update: false
  })

  // const [updateMember, setUpdateMember] = setState({

  // })

  const member = useSelector((state) => state.ui.member.memberDetailsReducer)
  const { memberDetails, loading } = member

  const openModel = () => {
    setOpen(true)
  }

  const deleteMemeber = () => {
    setState({ ...s, del: !s.del })
  }

  const updateMemeber = () => {
    setState({ ...s, update: !s.update })
  }

  useEffect(() => {
    dispatch(getMemberDetailsActions({ id }))
  }, [dispatch])

  return (
    <div className="details">
      {loading ? (
        'loading'
      ) : memberDetails ? (
        <div>
          <div className="details-title">
            <h4>Isim Soyisim </h4>
            <p>
              {memberDetails.user_name} {memberDetails.user_surname}
            </p>
          </div>
          <div className="details-body">
            <h5>Email</h5>
            <p> {memberDetails.user_email}</p>
            <h5>Telefon Numarasi</h5>
            <p>{memberDetails.user_phonenumber}</p>
            <h5>Ödünç Aldığı Kitaplar</h5>
            <p>Yapım Aşamasında ...</p>
            {s.del ? (
              <Modal closeModal={() => deleteMemeber()}>
                <p>sil</p>
                <p>vazgec</p>
              </Modal>
            ) : null}
            {s.update ? (
              <Modal closeModal={() => updateMemeber()}>
                <h4>Isim Soyisim </h4>
                <input value={memberDetails.user_name} />
              </Modal>
            ) : null}
          </div>
          <div className="details-footer">
            <h1>Yapmak İstedğiniz İşlemi Seçiniz</h1>
            <button onClick={deleteMemeber}>Kullaniciyi Sil</button>
            <button onClick={updateMemeber}>Guncelle</button>
          </div>
        </div>
      ) : (
        'yukleniyor'
      )}
    </div>
  )
}

export default MemberDetails
