/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getMemberBorrowListActions } from './actions/creators'

const MemberBorrow = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.domain.info.userInfo)
  const { user_id } = user
  const books = useSelector((state) => state.domain.myBooks.userBooks)

  useEffect(() => {
    dispatch(getMemberBorrowListActions(user_id))
  }, [dispatch])

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ISBN ID</th>
            <th>Kitap Adı</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book, id) => (
              <tr key={id}>
                <td>{book.ISBN_id}</td>
                <td>{book.book_name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default MemberBorrow
