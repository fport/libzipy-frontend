import React from 'react'

const DetailUser = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">title</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button onClick={props.onClose}>close</button>
        </div>
      </div>
    </div>
  )
}

export default DetailUser
