import React, { useEffect, useRef, useState } from 'react'

import './Toast.css'

const Toast = props => {
  let { show, text } = props
  const mounted = useRef()
  const [display, setDisplay] = useState('none')
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
    } else {
      if (show) {
        setDisplay(show)
      } else {
        setDisplay('none')
      }
    }
  }, [show])
  return (
    <div id='toast-container' style={{ display: display }}>
      <p>{text}</p>
    </div>
  )
}

export default Toast
