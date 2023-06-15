import React from 'react'
import { IButton } from '../../interfaces'

export const Button = ({ text, onClick }:IButton) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
