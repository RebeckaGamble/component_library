import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Stockholm from './Stockholm.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Stockholm' element={<Stockholm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
