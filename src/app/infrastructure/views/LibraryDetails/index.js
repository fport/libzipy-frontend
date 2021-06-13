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

  // for dynamic library info
  const library = useSelector((state) => state.ui.library.libraryListReducer)
  const { libraryList } = library
  const lib = libraryList.find((e) => e.library_id == id)

  const librarys = useSelector((state) => state.ui.library.libraryDetailsReducer)
  const { libraryDetails, loading } = librarys

  console.log(libraryDetails)

  const onClickHandle = (id) => {
    history.push(`books/${id}`)
  }

  useEffect(() => {
    dispatch(getLibraryDetailsActions({ id }))
  }, [dispatch])

  return (
    <div className="library-details-container">
      <div className="library-details-container-content">
        <div className="info">
          <div className="info-library-name">
            <h2>{lib.library_name}</h2>
          </div>
          <div className="info-library-details">
            <div className="image-container">
              <img src={libraryA} style={{ width: '200px', height: 'auto' }} />
              <span className="centered">{lib.library_name}</span>
            </div>
            <span className="adress">
              <h5>Adress : </h5> {lib.library_adress}
            </span>
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
              {(libraryDetails &&
                libraryDetails.map((lib, id) => (
                  <tr key={id}>
                    <td>{lib.book_name || '-'}</td>
                    <td>{lib.book_number_of_pages || '-'}</td>
                    <td>{lib.book_date_of_issue || '-'}</td>
                    <td>{lib.book_place_of_publication || '-'}</td>
                    <td className="opration">
                      <button className="btn-sm" onClick={() => onClickHandle(lib.ISBN_id)}>
                        Detaya Git
                      </button>
                    </td>
                  </tr>
                ))) || <span>loading</span>}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default LibraryDetails
