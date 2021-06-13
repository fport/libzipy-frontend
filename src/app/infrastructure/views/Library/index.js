/* eslint-disable */
import React, { useState } from 'react'
import { libraryA } from '../../../assets'
import LibraryInfo from './library-label'

const Library = () => {
  return (
    <div className="library-container">
      <div className="library-container-content">
        <div className="library-container-content-item">
          <div className="image-container">
            <img src={libraryA} style={{ width: '200px', height: 'auto' }} />
            <span className="centered">library asdas</span>
          </div>
          <LibraryInfo title={'Kutuphane Adi'} value="Kutuphane Adresi" />
          <div className="library-container-item-left"></div>
          <button className="btn-sm">Detay</button>
        </div>
      </div>
    </div>
  )
}

export default Library
