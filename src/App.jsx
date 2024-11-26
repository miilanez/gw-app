import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/header'

const App = () => {
  return (
    <div className="min-w-72">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
