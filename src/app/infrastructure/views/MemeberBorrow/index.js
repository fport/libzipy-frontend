/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getMemberBorrowListActions, deliveredBookActions } from './actions/creators'

const MemberBorrow = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.domain.info.userInfo)
  const { user_id } = user
  const books = useSelector((state) => state.domain.myBooks.userBooks)

  useEffect(() => {
    dispatch(getMemberBorrowListActions(user_id))
  }, [dispatch])

  const onClickHandle = (isbn) => {
    dispatch(deliveredBookActions(user_id, isbn))
    dispatch(getMemberBorrowListActions(user_id))
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Kitap Adı</th>
            <th>Kitap Sayfası</th>
            <th>Kitabin Yayinlanma Tarihi</th>
            <th>Kitabin Yayinlanma Yeri</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book, id) => (
              <tr key={id}>
                <td>{book.book_name}</td>
                <td>{book.book_number_of_pages}</td>
                <td>{book.book_date_of_issue}</td>
                <td>{book.book_place_of_publication}</td>
                <td className="opration">
                  <button className="btn-sm" onClick={() => onClickHandle(book.ISBN_id)}>
                    Teslim et
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default MemberBorrow
