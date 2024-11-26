import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="min-w-72">
      <Outlet />
    </div>
  )
}

export default App
