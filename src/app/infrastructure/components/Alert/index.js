import React from 'react'

/* eslint-disable react/prop-types */
const Alert = (props) => {
  const bg = {
    background:
      props.status == 'error' ? '#ec9896' : props.status == 'succes' ? '#20c997' : '#343a40'
  }

  return (
    <div className="alert-container" style={bg}>
      {props.text}
    </div>
  )
}

export default Alert
