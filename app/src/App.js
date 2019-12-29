import React, { useState, useEffect } from 'react'
import './App.css'

import Calculator from './Components/Calculator'

const App = () => {
  const [wasm, setWasm] = useState(null)

  useEffect(() => {
    loadWasm()
  }, [])

  const loadWasm = async () => {
    try {
      const wasm = await import('rust-wasm-react-calculator')
      setWasm(wasm)
    } catch {
      alert(
        'An error occurred loading the WASM module. Please refresh to try again'
      )
    } finally {
      console.log('Wasm has loaded')
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Rust Wasm Calculator</h1>
        <span>
          Build with love, (and jank), in Rust (compiled to Wasm), and React.
        </span>
        <br />
        <span>
          Source code:
          <a
            rel='noopener noreferrer'
            href='https://github.com/krab7191/rust-wasm-calculator'
            target='_blank'
          >
            HERE
          </a>
          &nbsp; (opens new tab)
        </span>
      </header>
      <div className='calc-container'>
        <Calculator calculate={wasm ? wasm.calculate : null} />
      </div>
    </div>
  )
}

export default App
