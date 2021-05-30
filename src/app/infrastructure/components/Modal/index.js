import React from 'react'

const Modal = (props) => {
  return (
    <div className="modal" onClick={props.closeModal}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button onClick={props.closeModal}>close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal

// Kullanirken sunlari eklemelisin
/*
    const [open, setOpen] = useState(false)

    const openModel = () => {
      setOpen(true)
    }

    const closeModal = () => {
      setOpen(false)
    }

    return (
      <Modal 
          closeModal={() => closeModal()}
          title={}
      >
      <div> icerik </div>
      </Modal>
    )


     {open ? (
                  <Modal closeModal={() => closeModal()}>
                    <p>{user.user_email}</p>
                  </Modal>
                ) : null}

*/
