import React from 'react'
import { IField } from '../../interfaces'
import './field.css'

export const Field = ({ type, placeholder, icon }:IField) => {
  return (
    <div className="fieldContainer">
      <span className="material-icons">
        {icon}
      </span>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}
