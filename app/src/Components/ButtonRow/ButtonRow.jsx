import React from 'react'
import CalculatorButton from '../CalculatorButton'

const ButtonRow = props => {
  const { chars } = props
  console.log(props, chars)
  return (
    <div className='calculator-row'>
      {chars.map((char, i) => {
        return <CalculatorButton key={i} text={char} />
      })}
    </div>
  )
}

export default ButtonRow
