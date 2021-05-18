import React from 'react'
import ReactDOM from 'react-dom'
import Router from './app/infrastructure/Router'
import './app/scss/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
