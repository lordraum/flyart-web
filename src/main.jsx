import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/pacifico'
import 'normalize.css'
import '../src/css/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './routes/Inicio'
import AcercaDe from './routes/AcercaDe'
import Obras from './routes/Obras'
import Logros from './routes/Logros'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/acerca-de',
    element: <AcercaDe />
  },
  {
    path: '/obras',
    element: <Obras />
  },
  {
    path: '/logros',
    element: <Logros />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
