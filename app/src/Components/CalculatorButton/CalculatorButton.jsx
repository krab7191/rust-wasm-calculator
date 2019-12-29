import React from 'react'
import './CalculatorButton.css'

const CalculatorButton = props => {
  const { text, handler, size } = props
  return (
    <div
      className='calculator-button br-half'
      style={{ width: size === 'double' ? '50%' : '25%' }}
      onClick={e => handler(e)}
    >
      {text}
    </div>
  )
}

export default CalculatorButton
