import React, { useState } from 'react'
import shortid from 'shortid'

import ButtonRow from '../ButtonRow'
import Toast from '../Toast'
import './Calculator.css'

import { copyElemText } from '../../utils/clipboard'

const Calculator = props => {
  const { calculate } = props

  const rows = [
    ['7', '8', '9', '%'],
    ['4', '5', '6', 'X'],
    ['1', '2', '3', '-'],
    ['0', '.', '+', '=']
  ]

  const clickHandler = e => {
    const { innerText } = e.target
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

  const [calculationState, setCalculationState] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [hasOperator, setHasOperator] = useState(false)
  const [valid, setValid] = useState(false)

  const handleInputChange = e => {
    const { key, keyCode } = e
    const keys = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '%',
      '^',
      '*',
      '-',
      '+',
      '=',
      '.',
      'x',
      'X'
    ]
    if (
      keys.includes(key) ||
      keyCode === 46 ||
      keyCode === 8 ||
      keyCode === 13
    ) {
      const valid = determineCharValid(key.toLowerCase())
      if (valid) {
        setCalculationState(calculationState + key)
      }
    }
  }

  const determineCharValid = char => {
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    const opers = ['+', '-', '*', 'x', '^', '%']
    const last =
      calculationState.length > 0
        ? calculationState[calculationState.length - 1]
        : ''
    console.log(`Last: ${last}`)
    if (
      (char === 'backspace' || char === 'delete') &&
      calculationState.length > 0
    ) {
      if (opers.includes(calculationState[calculationState.length - 1])) {
        setHasOperator(false)
      }
      if (!hasOperator) {
        setValid(false)
      }
      if (hasOperator && !num.includes(last)) {
        setValid(false)
      }
      setCalculationState(
        calculationState.substring(0, calculationState.length - 1)
      )
    } else if (opers.includes(char)) {
      if (!hasOperator) {
        setHasOperator(true)
        return true
      } else {
        return false
      }
    } else if (char === '=' || char === 'enter') {
      if (hasOperator && num.includes(last)) {
        calculate && calculate(calculationState + '')
      }
      return false
    } else if (last === '') {
      if (num.includes(char) || char === '.') {
        return true
      } else return false
    } else if (last === '.') {
      if (num.includes(char)) {
        return true
      } else return false
    } else if (num.includes(last)) {
      return true
    } else if (opers.includes(last)) {
      if (num.includes(char) || char === '.') {
        return true
      } else return false
    }
  }

  return (
    <>
      <Toast show={showToast} text={toastMessage} />
      <div id='calculator-container' className='br-2'>
        <div
          className='display-row br-half'
          onClick={e => {
            if (calculationState.length > 0) {
              copyElemText(e.target)
              setShowToast(true)
              setToastMessage('Copied to clipboard!')
              window.setTimeout(() => {
                setShowToast(false)
              }, 2000)
            }
          }}
        >
          <input
            type='text'
            value={calculationState}
            onKeyUp={e => handleInputChange(e)}
          />
        </div>
        {grid}
      </div>
    </>
  )
}

export default Calculator
