import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  
    <RouterProvider router={router} />
  </div>
)
