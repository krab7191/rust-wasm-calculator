import React, { useState } from 'react'
import shortid from 'shortid'

import ButtonRow from '../ButtonRow'
import Toast from '../Toast'
import './Calculator.css'

import { copyElemText } from '../../utils/clipboard'

const Calculator = () => {
  const rows = [
    ['7', '8', '9', '%'],
    ['4', '5', '6', 'X'],
    ['1', '2', '3', '-'],
    ['0', '.', '+', '=']
  ]

  const clickHandler = e => {
    const { innerText } = e.target
    console.log(innerText)
  }

  // Make the button rows
  const grid = []
  for (let i = 0; i < rows.length; i++) {
    grid.push(
      <ButtonRow
        chars={rows[i]}
        handler={clickHandler}
        key={shortid.generate()}
      />
    )
  }

  const [calculationState, setCalculationState] = useState(14)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  return (
    <>
      <Toast show={showToast} text={toastMessage} />
      <div id='calculator-container' className='br-2'>
        <div
          className='display-row br-half'
          onClick={e => {
            copyElemText(e.target)
            setShowToast(true)
            setToastMessage('Copied to clipboard!')
            window.setTimeout(() => {
              setShowToast(false)
            }, 2000)
          }}
        >
          <input dir='rtl' type='text' value={calculationState} />
        </div>
        {grid}
      </div>
    </>
  )
}

export default Calculator
