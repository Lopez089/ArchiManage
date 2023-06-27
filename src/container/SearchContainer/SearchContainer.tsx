import React from 'react'
import { Search, Field } from '../../components'
import './SearchContainer.css'

export const SearchContainer = () => {
  return (
    <div className="SearchContainer ">
      <Search>
        <Field type='text' placeholder='busqueda' icon='search'/>
      </Search>
    </div>
  )
}
