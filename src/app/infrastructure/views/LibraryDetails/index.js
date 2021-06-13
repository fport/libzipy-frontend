/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { libraryA } from '../../../assets'
import LibraryInfo from './library-label'
import { useDispatch, useSelector } from 'react-redux'
import { getLibraryDetailsActions } from './actions/creators'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const LibraryDetails = ({ history }) => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const library = useSelector((state) => state.ui.library.libraryListReducer)
  const { libraryList, loading } = library
  const lib = libraryList.find((e) => e.library_id == id)

  const onClickHandle = (id) => {
    console.log(id)
    // history.push(`member/${id}`)
  }

  // useEffect(() => {
  //   if (!libraryDetails) {
  //     dispatch(getLibraryDetailsActions({ id }))
  //   } else {
  //     // setName(memberDetails.user_name)
  //     // setSurname(memberDetails.user_surname)
  //     // setPhone(memberDetails.user_phonenumber)
  //     // setEmail(memberDetails.user_email)
  //     // setPassword(memberDetails.user_password)
  //     // setIsAdmin(memberDetails.user_isadmin)
  //   }
  // }, [dispatch, memberDetails, loading])
  useEffect(() => {
    dispatch(getLibraryDetailsActions({ id }))
  }, [dispatch])

  return (
    <div className="library-container">
      <div className="library-container-content">
        <div className="info">
          <div className="info-library-name">
            <h2>Bursa Kutuphanesi</h2>
          </div>
          <div className="info-library-details">
            <div className="image-container">
              <img src={libraryA} style={{ width: '200px', height: 'auto' }} />
              <span className="centered">{library.library_name}</span>
            </div>
            <div>
              <span>adres</span>
            </div>
          </div>
        </div>
        <div className="details">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Kitap Adı</th>
                <th>Kitabın Sayfasi</th>
                <th>Yayinlandigi Tarih</th>
                <th>Nererede Paylasildi</th>
                <th>
                  <span>Detay </span>
                  <i className="fas fa-angle-double-down" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default LibraryDetails
