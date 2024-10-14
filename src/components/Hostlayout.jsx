import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Hostlayout() {
  return (
    <>
     <div className="host-layout">
      <NavLink to='.'>Dashboard</NavLink>
      <NavLink to='income'>Income</NavLink>
      <NavLink to='vans'>Vans</NavLink>
      <NavLink to='reviews'>Reviews</NavLink>
     </div>
     <Outlet/>
    </>
  )
}
