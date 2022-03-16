import React from 'react'
import { Toast, ToastBody } from 'react-bootstrap'

const MsgToast = ({ toastMsg, setToastMsg }) => {
  const handleOnClose = () => {
    setToastMsg('')
  }

  return (
    <Toast
      show={!!toastMsg}
      onClose={() => handleOnClose()}
      delay={2000}
      autohide
      className="animate__animated animate__fadeIn toast"
      animation={false}
    >
      <ToastBody>{toastMsg} </ToastBody>
    </Toast>
  )
}

export default MsgToast
