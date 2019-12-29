import React, { useState, useEffect } from 'react'
import './App.css'

import Calculator from './Components/Calculator'

const Loaded = ({ wasm, name }) => (
  <button onClick={() => wasm.greet(name)}>
    Wasm ready! Call alert( "Hello, {name}" )
  </button>
)

const Unloaded = ({ loading }) => {
  return loading ? (
    <div>Loading...</div>
  ) : (
    <button>Click to load Wasm package.</button>
  )
}

const App = () => {
  const [loading, setLoading] = useState(false)
  const [wasm, setWasm] = useState(null)
  const [name, setName] = useState(null)

  // useEffect(() => {
  //   loadWasm();
  //   const userName = prompt("Hi there! What's your name?");
  //   if (userName === 'null' || userName.trim() === '') {
  //     setName('Stranger');
  //   } else {
  //     setName(userName);
  //   }
  // }, []);

  const loadWasm = async () => {
    try {
      setLoading(true)
      const wasm = await import('rust-wasm-react-calculator')
      setWasm(wasm)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {/* {wasm ? (
          <Loaded wasm={wasm} name={name} />
        ) : (
          <Unloaded loading={loading} loadWasm={loadWasm} />
        )} */}
        <div className='calc-container'>
          <Calculator />
        </div>
      </header>
    </div>
  )
}

export default App
