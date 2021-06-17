import React, { useEffect } from 'react'
import { Navbarr, Footer } from '../../../components'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksListActions } from '../../Books/actions/creators'

const LandBooks = () => {
  const dispatch = useDispatch()
  const booksList = useSelector((state) => state.ui.books.booksReducer)
  const { books } = booksList

  useEffect(() => {
    dispatch(getBooksListActions())
  }, [dispatch])

  return (
    <>
      <Navbarr />
      <div className="center" style={{ width: '100%', minHeight: 'calc(100vh - 196px)' }}>
        <div className="center" style={{ width: '80%' }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Kitap Adı</th>
                <th>Kitabın Sayfasi</th>
                <th>Yayım Tarihi</th>
                <th>Yayım Yeri</th>
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
                  </tr>
                ))) || <span>loading</span>}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandBooks
