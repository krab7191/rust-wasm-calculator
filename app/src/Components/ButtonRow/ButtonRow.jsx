import React from 'react'
import CalculatorButton from '../CalculatorButton'

const ButtonRow = props => {
  const { chars, handler } = props
  return (
    <div className='calculator-row'>
      {chars.map((char, i) => {
        return (
          <CalculatorButton
            key={i}
            text={char}
            handler={handler}
            size={char === 'Clear' && 'double'}
          />
        )
      })}
    </div>
  )
}

export default ButtonRow
