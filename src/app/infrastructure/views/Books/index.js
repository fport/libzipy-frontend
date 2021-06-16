/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getBooksListActions,
  addBookToLibraryActions,
  bookDeleteActions,
  getBookTypeActions
} from './actions/creators'
import { getAuthorListActions } from '../Author/actions/creators'
import { Table } from 'react-bootstrap'
import { Modal } from '../../components'

const Books = ({ history }) => {
  const [s, setState] = useState({
    del: false,
    update: false,
    add: false
  })
  const [name, setName] = useState('')
  const [pages, setPages] = useState('')
  const [issue, setIssue] = useState('')
  const [publicaction, setPublicaction] = useState('')
  const [type, setType] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()

  const selectedData = useSelector((data) => data.domain.info.userInfo)
  const booksList = useSelector((state) => state.ui.books.booksReducer)
  const { books, types } = booksList

  const authorx = useSelector((state) => state.ui.author.authorReducer)
  const { authors } = authorx

  const addSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addBookToLibraryActions(name, pages, issue, publicaction, author, type))
    dispatch(getBooksListActions())
    setState({ ...s, add: !s.add })
  }

  const onClickDeleteHandle = (isbn) => {
    dispatch(bookDeleteActions(isbn))
    dispatch(getBooksListActions())
  }

  const onClickHandle = (id) => {
    history.push(`books/${id}`)
  }

  const addBooktoLibrary = () => {
    setState({ ...s, add: !s.add })
  }

  useEffect(() => {
    dispatch(getBooksListActions())
    dispatch(getBookTypeActions())
    dispatch(getAuthorListActions())
  }, [dispatch])

  return (
    <div className="books-container">
      {selectedData.user_isadmin == 1 ? (
        <div className="add-library" onClick={() => addBooktoLibrary()}>
          <i className="fas fa-plus" />
        </div>
      ) : null}
      {s.add ? (
        <Modal title="Kütüphaneye Kitap Ekle" closeModal={() => addBooktoLibrary()}>
          <form onSubmit={addSubmitHandler}>
            <h4>Kitabin Adi</h4>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
            <h4>Sayfa Numarasi</h4>
            <input value={pages} onChange={(e) => setPages(e.target.value)} required />
            <h4>Kitabin Yayım Tarihini seciniz</h4>
            <input type="date" value={issue} onChange={(e) => setIssue(e.target.value)} required />
            <h4>Kitabin Yayinlanma Yeri</h4>
            <input
              value={publicaction}
              onChange={(e) => setPublicaction(e.target.value)}
              required
            />
            <h4 for="type">Kitap türü seçiniz</h4>
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
              {types && types.map((type) => <option value={type.type_id}>{type.type_name}</option>)}
            </select>
            <h4 for="type">Kitap yazari seçiniz</h4>
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
                authors.map((au) => (
                  <option value={au.author_id}>
                    {au.author_name} {au.author_surname}
                  </option>
                ))}
            </select>
            <button type="submit">Ekle</button>
          </form>
        </Modal>
      ) : null}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Kitap Adı</th>
            <th>Kitabın Sayfasi</th>
            <th>Yayım Tarihi</th>
            <th>Yayım Yeri</th>
            <th>
              <span>Detay </span>
              <i className="fas fa-angle-double-down" />
            </th>
          </tr>
        </thead>
        <tbody>
          {(books &&
            books.map((book, id) => (
              <tr key={id}>
                <td>{book.book_name || '-'}</td>
                <td>{book.book_number_of_pages || '-'}</td>
                <td>{book.book_date_of_issue || '-'}</td>
                <td>{book.book_place_of_publication || '-'}</td>
                <td className="opration">
                  <button className="btn-sm" onClick={() => onClickHandle(book.ISBN_id)}>
                    Detaya Git
                  </button>
                </td>
                {selectedData.user_isadmin == 1 ? (
                  <td>
                    <button
                      className="option center"
                      onClick={() => onClickDeleteHandle(book.ISBN_id)}
                    >
                      <i className="fas fa-trash-alt" />
                    </button>
                  </td>
                ) : null}
              </tr>
            ))) || <span>loading</span>}
        </tbody>
      </Table>
    </div>
  )
}

export default Books
