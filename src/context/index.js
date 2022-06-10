import React from 'react'
import { WizzardProvider } from './wizzardContext'
import { BrowserRouter as Router } from 'react-router-dom'

function AppProvider({ children }) {
  return (
    <Router>
      <WizzardProvider>{children}</WizzardProvider>
    </Router>
  )
}

export { AppProvider }
