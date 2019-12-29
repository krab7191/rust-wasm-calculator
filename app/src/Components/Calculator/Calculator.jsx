import React, { useState } from 'react'
import ButtonRow from '../ButtonRow'
import './Calculator.css'

const rows = [
  ['7', '8', '9', '%'],
  ['4', '5', '6', 'X'],
  ['1', '2', '3', '-'],
  ['0', '.', '+', '=']
]

const Calculator = () => {
  // Make the button rows
  const grid = []
  for (let i = 0; i < rows.length; i++) {
    grid.push(<ButtonRow chars={rows[i]} />)
  }

  const [calculationState, setCalculationState] = useState(0)

  return (
    <>
      <div id='calculator-container' className='br-2'>
        <div className='display-row br-half'>
          <span>{calculationState}</span>
        </div>
        {grid}
      </div>
    </>
  )
}

export default Calculator
