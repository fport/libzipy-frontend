/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksListActions } from './actions/creators'
import { Table } from 'react-bootstrap'

const Books = ({ history }) => {
  const dispatch = useDispatch()

  const booksList = useSelector((state) => state.ui.books.booksReducer)
  const { books } = booksList

  const onClickHandle = (id) => {
    history.push(`books/${id}`)
  }

  useEffect(() => {
    dispatch(getBooksListActions())
  }, [dispatch])

  return (
    <div className="books-container">
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
              </tr>
            ))) || <span>loading</span>}
        </tbody>
      </Table>
    </div>
  )
}

export default Books
