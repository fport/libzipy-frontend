/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { libraryA } from '../../../assets'
import LibraryInfo from './library-label'
import { useDispatch, useSelector } from 'react-redux'
import { getLibraryDetailsActions, addBookToLibraryActions } from './actions/creators'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Modal } from '../../components'

const LibraryDetails = ({ history }) => {
  const [s, setState] = useState({
    del: false,
    update: false,
    add: false
  })
  const [name, setName] = useState('')
  const [pages, setPages] = useState('')
  const [issue, setIssue] = useState('')
  const [publicaction, setPublicaction] = useState('')
  // const [authorId, setAuthorId] = useState('')
  // const [typeId, setTypeId] = useState('')

  const { id } = useParams()
  const dispatch = useDispatch()

  const library = useSelector((state) => state.ui.library.libraryListReducer)
  const { libraryList } = library
  const lib = libraryList.find((e) => e.library_id == id)
  const librarys = useSelector((state) => state.ui.library.libraryDetailsReducer)
  const { libraryDetails, loading } = librarys
  const selectedData = useSelector((data) => data.domain.info.userInfo)

  const onClickHandle = (id) => {
    history.push(`/dashboard/books/${id}`)
  }
  const addBooktoLibrary = () => {
    setState({ ...s, add: !s.add })
  }

  const addSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addBookToLibraryActions(name, pages, issue, publicaction))
    dispatch(getLibraryDetailsActions({ id }))
    setState({ ...s, add: !s.add })
  }

  useEffect(() => {
    dispatch(getLibraryDetailsActions({ id }))
  }, [dispatch])

  return (
    <div className="library-details-container">
      <div className="library-details-container-content">
        {selectedData.user_isadmin == 1 ? (
          <div className="add-library" onClick={() => addBooktoLibrary()}>
            <i className="fas fa-plus" />
          </div>
        ) : null}
        {s.add ? (
          <Modal title="Kütüphaneye Kitap Ekle" closeModal={() => addBooktoLibrary()}>
            <form onSubmit={addSubmitHandler}>
              <h4>Kitabin Adi</h4>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <h4>Sayfa Numarasi</h4>
              <input value={pages} onChange={(e) => setPages(e.target.value)} />
              <h4>Kitabin Yayinlanma Tarihi</h4>
              <input value={issue} onChange={(e) => setIssue(e.target.value)} />
              <h4>Nerede Paylasildi</h4>
              <input value={publicaction} onChange={(e) => setPublicaction(e.target.value)} />
              <button type="submit">Ekle</button>
            </form>
          </Modal>
        ) : null}
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
