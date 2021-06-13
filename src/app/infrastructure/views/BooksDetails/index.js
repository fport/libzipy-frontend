/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksDetailsActions } from './actions/creators'
import { Table } from 'react-bootstrap'
import InfoLabel from './library-label'
import { useParams } from 'react-router-dom'

const BooksDetails = ({ history }) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const booksList = useSelector((state) => state.ui.books.booksDetailsReducer)
  const { booksDetails } = booksList

  // const onClickHandle = (id) => {
  //   history.push(`books/${id}`)
  // }

  useEffect(() => {
    dispatch(getBooksDetailsActions({ id }))
  }, [dispatch])

  return (
    <>
      {(booksDetails && (
        <div className="books-details-container">
          <div className="books-details-container-content">
            <div className="info">
              <InfoLabel title={'Kitabin Adi'} value={`${booksDetails.book_name}`} />
              <InfoLabel title={'Sayfa Numarasi'} value={`${booksDetails.book_number_of_pages}`} />
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
