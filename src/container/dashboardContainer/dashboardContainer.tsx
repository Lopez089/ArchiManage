import React from 'react'
import { Nav, Navbar, BodyDashboard } from '../../components'
import './dashboardContainer.css'

export const DashboardContainer = () => {
  return (
    <section className="dashboardContainer">
      <Navbar/>
      <section className='bodyDashboard'>
        <Nav/>
        <BodyDashboard/>
      </section>
    </section>
  )
}
