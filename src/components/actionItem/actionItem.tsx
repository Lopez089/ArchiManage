import React from 'react'
import { ImenuOption } from '../../interfaces'

export const ActionItem = ({ optionName, icon, action }:ImenuOption) => {
  return (
    <li onClick={action}>
      <span className="material-icons"> {icon}</span>
      {optionName}
    </li>
  )
}
