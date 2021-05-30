/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMemberDetailsActions } from './actions/creators'
import { useParams } from 'react-router-dom'

const MemberDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const member = useSelector((state) => state.ui.member.memberDetailsReducer)
  const { memberDetails, loading } = member

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
          </div>
          <div className="details-footer">
            <h1>Yapmak İstedğiniz İşlemi Seçiniz</h1>
            <button>Kullaniciyi Sil</button>
            <button>Guncelle</button>
          </div>
        </div>
      ) : (
        'yukleniyor'
      )}
    </div>
  )
}

export default MemberDetails
