import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  return (
    <>

    <h1>protected routes</h1>
    <Outlet/>
    </>
  )
}

export default ProtectedRoute