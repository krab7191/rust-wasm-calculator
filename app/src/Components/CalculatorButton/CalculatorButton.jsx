import React from 'react'
import './CalculatorButton.css'

const CalculatorButton = props => {
  const { text, handler } = props
  return (
    <div className='calculator-button br-half' onClick={e => handler(e)}>
      {text}
    </div>
  )
}

export default CalculatorButton
