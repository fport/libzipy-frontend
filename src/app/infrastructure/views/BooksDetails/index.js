/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getBooksDetailsActions,
  getBooksAuthorActions,
  getBooksTypeActions,
  borrowBookActions
} from './actions/creators'
import { Table } from 'react-bootstrap'
import InfoLabel from './library-label'
import { useParams } from 'react-router-dom'

const BooksDetails = ({ history }) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const user = useSelector((state) => state.domain.info.userInfo)
  const { user_id, user_isadmin } = user
  const booksList = useSelector((state) => state.ui.books.booksDetailsReducer)
  const { booksDetails, booksAuthor, booksType } = booksList

  const onClickHandle = () => {
    dispatch(borrowBookActions(user_id, booksDetails.ISBN_id))
  }

  useEffect(() => {
    dispatch(getBooksDetailsActions({ id }))
    dispatch(getBooksAuthorActions({ id }))
    dispatch(getBooksTypeActions({ id }))
  }, [dispatch])

  return (
    <>
      {(booksDetails && booksAuthor && booksType && (
        <div className="books-details-container">
          <div className="books-details-container-content">
            <div className="info">
              <InfoLabel title={'Kitabin Adi'} value={`${booksDetails.book_name}`} />
              <InfoLabel title={'Sayfa Numarasi'} value={`${booksDetails.book_number_of_pages}`} />
              <InfoLabel title={'Kitabin Türü'} value={`${booksType.type_name}`} />
              <InfoLabel
                title={'Kitabin Yazari'}
                value={`${booksAuthor.author_name} ${booksAuthor.author_surname}`}
              />
              <InfoLabel
                title={'Kitabin Yayinlanma Tarihi'}
                value={`${booksDetails.book_date_of_issue}`}
              />
              <InfoLabel
                title={'Kitabin Yayinlanma Yeri'}
                value={`${booksDetails.book_place_of_publication}`}
              />
            </div>
          </div>
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
        </div>
      )) ||
        'yukleniyor'}
    </>
  )
}

export default BooksDetails
