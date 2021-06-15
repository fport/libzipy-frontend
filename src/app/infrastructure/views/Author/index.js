/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthorListActions, addAuthorActions } from './actions/creators'
import { Modal } from '../../components'

const Author = () => {
  const [s, setState] = useState({
    del: false,
    update: false,
    add: false
  })
  const [name, setName] = useState('')
  const [pages, setPages] = useState('')
  const [issue, setIssue] = useState('')
  const [publicaction, setPublicaction] = useState('')
  const dispatch = useDispatch()

  const selectedData = useSelector((data) => data.domain.info.userInfo)
  const authorx = useSelector((state) => state.ui.author.authorReducer)
  const { authors } = authorx

  const addSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addAuthorActions(name, pages, issue, publicaction))
    dispatch(getAuthorListActions())
    setState({ ...s, add: !s.add })
  }

  const addBooktoLibrary = () => {
    setState({ ...s, add: !s.add })
  }

  useEffect(() => {
    dispatch(getAuthorListActions())
  }, [dispatch])

  return (
    <div className="author-container">
      {selectedData.user_isadmin == 1 ? (
        <div className="add-library" onClick={() => addBooktoLibrary()}>
          <i className="fas fa-plus" />
        </div>
      ) : null}
      {s.add ? (
        <Modal title="Kütüphaneye Kitap Ekle" closeModal={() => addBooktoLibrary()}>
          <form onSubmit={addSubmitHandler}>
            <h4>Yazar İsmi</h4>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <h4>Yazar Soyadı</h4>
            <input value={pages} onChange={(e) => setPages(e.target.value)} />
            <h4>Yazar Uyruğu</h4>
            <input value={issue} onChange={(e) => setIssue(e.target.value)} />
            <h4>Yazar Doğum Günü</h4>
            <input
              type="date"
              value={publicaction}
              onChange={(e) => setPublicaction(e.target.value)}
            />
            <button type="submit">Ekle</button>
          </form>
        </Modal>
      ) : null}
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
