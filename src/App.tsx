import React from 'react'
import './App.css'
import { ActionsMenu } from './components'
import { menuOptions } from './constant'

function App () {
  return (
    <ActionsMenu menuOptions={menuOptions}/ >
  )
}

export default App
