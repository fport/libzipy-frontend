/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getBooksDetailsActions,
  getBooksAuthorActions,
  getBooksTypeActions,
  borrowBookActions,
  bookUpdateActions
} from './actions/creators'
import { getBookTypeActions } from '../Books/actions/creators'
import { getAuthorListActions } from '../Author/actions/creators'
import InfoLabel from './library-label'
import { useParams } from 'react-router-dom'
import { Modal } from '../../components'

const BooksDetails = ({ history }) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [s, setState] = useState({
    del: false,
    update: false
  })
  const [name, setName] = useState('')
  const [pages, setPages] = useState('')
  const [issue, setIssue] = useState('')
  const [publicaction, setPublicaction] = useState('')
  const [type, setType] = useState('')
  const [author, setAuthor] = useState('')

  const updateMemeber = () => {
    setState({ ...s, update: !s.update })
  }

  const user = useSelector((state) => state.domain.info.userInfo)
  const { user_id, user_isadmin } = user
  const booksList = useSelector((state) => state.ui.books.booksDetailsReducer)
  const { booksDetails, booksAuthor, booksType } = booksList
  const booksListxz = useSelector((state) => state.ui.books.booksReducer)
  const { books, types } = booksListxz

  const authorx = useSelector((state) => state.ui.author.authorReducer)
  const { authors } = authorx

  const onClickHandle = () => {
    dispatch(borrowBookActions(user_id, booksDetails.ISBN_id))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(bookUpdateActions(id, name, pages, issue, publicaction, type, author))
    setState({ ...s, update: !s.update })
    dispatch(getBooksDetailsActions({ id }))
  }

  useEffect(() => {
    dispatch(getBooksDetailsActions({ id }))
    dispatch(getBooksAuthorActions({ id }))
    dispatch(getBooksTypeActions({ id }))
    dispatch(getBookTypeActions())
    dispatch(getAuthorListActions())
  }, [dispatch])

  useEffect(() => {
    if (booksDetails && booksType && booksAuthor && types && authors) {
      const t = types.find((t) => t.type_name == booksType.type_name)
      const an = authors.find((an) => an.author_name == booksAuthor.author_name)

      setName(booksDetails.book_name)
      setPages(booksDetails.book_number_of_pages)
      setIssue(booksDetails.book_date_of_issue)
      setPublicaction(booksDetails.book_place_of_publication)
      setType(t.type_id)
      setAuthor(an.author_id)
    }
  }, [s, booksDetails, booksType])
  return (
    <>
      {(booksDetails && (
        <div className="books-details-container">
          <div className="books-details-container-content">
            <div className="info">
              <InfoLabel
                title={'Kitabin Adi'}
                value={`${(booksDetails && booksDetails.book_name) || '-'}`}
              />
              <InfoLabel
                title={'Sayfa Numarasi'}
                value={`${(booksDetails && booksDetails.book_number_of_pages) || '-'}`}
              />
              <InfoLabel
                title={'Kitabin Türü'}
                value={`${(booksType && booksType.type_name) || '-'}`}
              />
              <InfoLabel
                title={'Kitabin Yazari'}
                value={`${(booksAuthor && booksAuthor.author_name) || '-'} ${
                  (booksAuthor && booksAuthor.author_surname) || '-'
                }`}
              />
              <InfoLabel
                title={'Kitabin Yayinlanma Tarihi'}
                value={`${(booksDetails && booksDetails.book_date_of_issue) || '-'}`}
              />
              <InfoLabel
                title={'Kitabin Yayinlanma Yeri'}
                value={`${(booksDetails && booksDetails.book_place_of_publication) || '-'}`}
              />
            </div>
          </div>
          {s.update ? (
            <Modal closeModal={() => updateMemeber()}>
              <form onSubmit={submitHandler}>
                <h4>Kitabin Adi</h4>
                <input value={name} onChange={(e) => setName(e.target.value)} required />
                <h4>Sayfa Numarasi</h4>
                <input
                  type="number"
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                  required
                />
                <h4>Kitabin Yayım Tarihini seciniz</h4>
                <input
                  type="date"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  required
                />
                <h4>Kitabin Yayinlanma Yeri</h4>
                <input
                  value={publicaction}
                  onChange={(e) => setPublicaction(e.target.value)}
                  required
                />
                <h4>Kitap türü seçiniz</h4>
                <select
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value)
                  }}
                  name="type"
                  id="type"
                  required
                >
                  <option>-</option>
                  {types &&
                    types.map((type, id) => (
                      <option key={id} value={type.type_id}>
                        {type.type_name}
                      </option>
                    ))}
                </select>
                <h4>Kitap yazari seçiniz</h4>
                <select
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value)
                  }}
                  name="type"
                  id="type"
                  required
                >
                  <option>-</option>
                  {authors &&
                    authors.map((au, id) => (
                      <option key={id} value={au.author_id}>
                        {au.author_name} {au.author_surname}
                      </option>
                    ))}
                </select>
                <button type="submit">Guncelle</button>
              </form>
            </Modal>
          ) : null}
          {user_isadmin && user_isadmin != 1 && (
            <div className="books-details-footer">
              <span className="books-details-text">Ödünç almak ister misiniz ?</span>
              <div className="options">
                <button className="btn-sm details-btn" onClick={onClickHandle}>
                  Ödünç Al
                </button>
              </div>
            </div>
          )}
          {user_isadmin && user_isadmin == 1 && (
            <div className="books-details-footer">
              <span className="books-details-text">Ödünç almak ister misiniz ?</span>
              <div className="options">
                <button className="btn-sm details-btn" onClick={updateMemeber}>
                  Guncelle
                </button>
              </div>
            </div>
          )}
        </div>
      )) ||
        'yukleniyor'}
    </>
  )
}

export default BooksDetails
