import React, { useEffect } from 'react'
import { Navbarr, Footer } from '../../../components'
import { libraryA } from '../../../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { libraryListActions } from '../../Library/actions/creators'
import LibraryInfo from './library-label'

const LandLibrary = () => {
  const dispatch = useDispatch()
  const library = useSelector((state) => state.ui.library.libraryListReducer)
  const { libraryList } = library

  useEffect(() => {
    dispatch(libraryListActions())
  }, [dispatch])

  return (
    <>
      <Navbarr />
      <div className="libraryx-container">
        <div className="libraryx-container-content">
          {libraryList
            ? libraryList.map((library, id) => (
                <div key={id} className="libraryx-container-content-item">
                  <div className="image-container">
                    <img src={libraryA} style={{ width: '200px', height: 'auto' }} />
                    <span className="centered">{library.library_name}</span>
                  </div>
                  <LibraryInfo title={library.library_name} value={library.library_adress} />
                </div>
              ))
            : 'loading'}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandLibrary
