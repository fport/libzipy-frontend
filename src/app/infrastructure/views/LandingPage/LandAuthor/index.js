import React, { useEffect } from 'react'
import { Navbarr, Footer } from '../../../components'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthorListActions } from '../../Author/actions/creators'

const LandAuthor = () => {
  const dispatch = useDispatch()
  const authorx = useSelector((state) => state.ui.author.authorReducer)
  const { authors } = authorx

  useEffect(() => {
    dispatch(getAuthorListActions())
  }, [dispatch])

  return (
    <>
      <Navbarr />
      <div className="center" style={{ width: '100%', minHeight: 'calc(100vh - 196px)' }}>
        <div className="center" style={{ width: '80%' }}>
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
      </div>
      <Footer />
    </>
  )
}

export default LandAuthor
