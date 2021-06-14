/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthorListActions } from './actions/creators'

const Author = () => {
  const dispatch = useDispatch()

  const authorx = useSelector((state) => state.ui.author.authorReducer)
  const { loading, authors } = authorx

  useEffect(() => {
    dispatch(getAuthorListActions())
  }, [dispatch])

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Yazar İsmi</th>
            <th>Yazar Soyisim</th>
            <th>Yazar Uyruğu</th>
            <th>Yazar Doğum Günü</th>
          </tr>
        </thead>
        <tbody>
          {authors &&
            authors.map((author, id) => (
              <tr key={id}>
                <td>{author.author_name}</td>
                <td>{author.author_surname}</td>
                <td>{author.author_nationality}</td>
                <td>{author.author_date_of_birth}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Author
