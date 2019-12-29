import React from 'react'

import './Toast.css'

const Toast = props => {
  let { show, text } = props
  return (
    <div id='toast-container' style={{ display: show ? 'block' : 'none' }}>
      <p>{text}</p>
    </div>
  )
}

export default Toast
