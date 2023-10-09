import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import App from './components/App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <RouterProvider router={router}/>
=======
    <BrowserRouter>
      <App/>
    </BrowserRouter>
>>>>>>> origin/feature/test-frontend
  </React.StrictMode>,
)
