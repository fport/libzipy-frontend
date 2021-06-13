/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getBooksDetailsActions,
  getBooksAuthorActions,
  getBooksTypeActions
} from './actions/creators'
import { Table } from 'react-bootstrap'
import InfoLabel from './library-label'
import { useParams } from 'react-router-dom'

const BooksDetails = ({ history }) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const booksList = useSelector((state) => state.ui.books.booksDetailsReducer)
  const { booksDetails, booksAuthor, booksType } = booksList

  const onClickHandle = (id) => {
    console.log('asda')
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
          <div className="books-details-footer">
            <span className="books-details-text">Ödünç almak ister misiniz ?</span>
            <div className="options">
              <button className="btn-sm details-btn" onClick={onClickHandle}>
                Ödünç Al
              </button>
            </div>
          </div>
        </div>
      )) ||
        'yukleniyor'}
    </>
  )
}

export default BooksDetails

//https://vtys-main-project.herokuapp.com/api/user_book
//user_id
//ISBN_id
// time_of_taken : new Date().toJSON().slice(0,10).split('-').reverse().join('.')
// time_of_given : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toJSON().slice(0,10).split('-').reverse().join('.')
