import React, { useState, useEffect } from 'react'
import './App.css'

import Calculator from './Components/Calculator'

const App = () => {
  const [wasm, setWasm] = useState(null)

  useEffect(() => {
    loadWasm();
  }, []);

  const loadWasm = async () => {
    try {
      const wasm = await import('rust-wasm-react-calculator')
      setWasm(wasm)
    } finally {
      console.log('Wasm loaded');
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='calc-container'>
          <Calculator calculate={wasm ? wasm.greet : null} />
        </div>
      </header>
    </div>
  )
}

export default App
