import React from 'react'
import './CalculatorButton.css'

const CalculatorButton = props => {
  return <div className='calculator-button br-half'>{props.text}</div>
}

export default CalculatorButton
