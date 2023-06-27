import React from 'react'
import { SearchContainer } from '../../container'
import './nav.css'

export const UserSection = () => {
  return (
    <div>UserSection</div>
  )
}

export const Nav = () => {
  return (
    <nav>
      <SearchContainer/>
      <UserSection/>
    </nav>
  )
}
