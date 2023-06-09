import React from 'react'

export const ActionsMenu = () => {
  return (
    <ul>
      <li>
        <span className="material-icons"> ios_share</span>
        Compartir
      </li>
      <li>
      <span className="material-icons">drive_file_move</span>
        Mover a
      </li>
      <li>
      <span className="material-icons">drive_file_rename_outline</span>
        Cambiar nombre
      </li>
      <li>
      <span className="material-icons">info</span>
        Ver detalles
      </li>
      <li>
      <span className="material-icons">download</span>
        Descargar
      </li>
      <li>
      <span className="material-icons">delete</span>
        Eliminar
      </li>
    </ul>
  )
}
