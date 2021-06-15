/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { libraryA } from '../../../assets'
import LibraryInfo from './library-label'
import { useDispatch, useSelector } from 'react-redux'
import { libraryListActions } from './actions/creators'

const Library = ({ history }) => {
  const dispatch = useDispatch()

  const library = useSelector((state) => state.ui.library.libraryListReducer)
  const { libraryList, loading } = library

  const selectedData = useSelector((data) => data.domain.info.userInfo)

  const onClickHandle = (id) => {
    history.push(`library/${id}`)
  }

  const onClickOptionHandle = (id) => {
    console.log('hello', id)
  }

  useEffect(() => {
    dispatch(libraryListActions())
  }, [dispatch])

  return (
    <div className="library-container">
      <div className="library-container-content">
        {libraryList
          ? libraryList.map((library, id) => (
              <div key={id} className="library-container-content-item">
                <div className="image-container">
                  <img src={libraryA} style={{ width: '200px', height: 'auto' }} />
                  <span className="centered">{library.library_name}</span>
                </div>
                <LibraryInfo title={library.library_name} value={library.library_adress} />
                <div className="library-container-item-left"></div>
                <div className="library-container-content-options">
                  <button className="btn-sm" onClick={() => onClickHandle(library.library_id)}>
                    Detay
                  </button>
                  {selectedData.user_isadmin == 1 ? (
                    <>
                      <button
                        className="option center"
                        onClick={() => onClickOptionHandle(library.library_id)}
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                      <button
                        className="option center"
                        onClick={() => onClickOptionHandle(library.library_id)}
                      >
                        <i className="fas fa-edit" />
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            ))
          : 'loading'}
      </div>
    </div>
  )
}

export default Library
