import React from 'react'
import { IDetail } from '../../interfaces'

export const Detail = ({ icon, owner, modified, open, created }:IDetail) => {
  return (
    <div>
      <span className="material-icons">{icon}</span>
      <div>
        <p>Propietario</p>
        <p>{owner}</p>
      </div>
      <div>
        <p>Modificado</p>
        <p>{modified}</p>
      </div>
      <div>
        <p>Abierto</p>
        <p>{open}</p>
      </div>
      <div>
        <p>Creado</p>
        <p>{created}</p>
      </div>
    </div>
  )
}
