import React from 'react'
import ReactDOM from 'react-dom/client'
import { CinemaApp } from './CinemaApp'
import { BrowserRouter } from 'react-router-dom'
import '../global-styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <CinemaApp />
    </BrowserRouter>
  // </React.StrictMode>
)
