import React from 'react'

export interface IFSElement{
  typeElement: 'file' | 'folder',
  nameElement: string

}

export const FSElement = ({ typeElement, nameElement }:IFSElement) => {
  const iconElement = typeElement === 'file' ? 'description' : 'folder'

  return (
    <div>
      <span className="material-icons">
        {iconElement}
      </span>
        <p>{nameElement}</p>
    </div>
  )
}
