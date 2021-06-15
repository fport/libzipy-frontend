/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { libraryA } from '../../../assets'
import LibraryInfo from './library-label'
import { useDispatch, useSelector } from 'react-redux'
import { libraryListActions, libraryDeleteActions, libraryAddActions } from './actions/creators'
import { Modal } from '../../components'

const Library = ({ history }) => {
  const [s, setState] = useState({
    del: false,
    update: false,
    add: false
  })
  const [libraryName, setLibraryName] = useState('')
  const [libraryAdress, setLibraryAdress] = useState('')

  const deleteMemeber = () => {
    setState({ ...s, del: !s.del })
  }

  const updateMemeber = () => {
    setState({ ...s, update: !s.update })
  }

  const addMemeber = () => {
    setState({ ...s, add: !s.add })
  }

  const dispatch = useDispatch()
  const library = useSelector((state) => state.ui.library.libraryListReducer)
  const { libraryList, loading } = library
  const selectedData = useSelector((data) => data.domain.info.userInfo)

  const onClickHandle = (id) => {
    history.push(`library/${id}`)
  }

  const onClickDeleteHandle = (id) => {
    dispatch(libraryDeleteActions(id))
    dispatch(libraryListActions())
  }
  const onClickUpdateHandle = (id) => {
    // dispatch(libraryDeleteActions(id))
  }

  const addSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(libraryAddActions(libraryName, libraryAdress))
    dispatch(libraryListActions())
    setState({ ...s, add: !s.add })
  }

  useEffect(() => {
    dispatch(libraryListActions())
  }, [dispatch])

  return (
    <div className="library-container">
      <div className="library-container-content">
        {selectedData.user_isadmin == 1 ? (
          <div className="add-library" onClick={() => addMemeber()}>
            <i className="fas fa-plus" />
          </div>
        ) : null}
        {s.add ? (
          <Modal title="Kütüphane Ekle" closeModal={() => addMemeber()}>
            <form onSubmit={addSubmitHandler}>
              <h4>Kütüphane Adı</h4>
              <input value={libraryName} onChange={(e) => setLibraryName(e.target.value)} />
              <h4>Kütüphane Adresi</h4>
              <input value={libraryAdress} onChange={(e) => setLibraryAdress(e.target.value)} />
              <button type="submit">Ekle</button>
            </form>
          </Modal>
        ) : null}
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
                        onClick={() => onClickDeleteHandle(library.library_id)}
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                      <button
                        className="option center"
                        onClick={() => onClickUpdateHandle(library.library_id)}
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
