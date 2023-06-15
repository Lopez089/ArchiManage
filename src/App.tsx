import React from 'react'
import './App.css'
import { Button } from './components'

function App () {
  return (
    <Button text='hola' onClick={() => console.log('fun')} />
  )
}

export default App
