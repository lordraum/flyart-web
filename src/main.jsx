import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'normalize.css'
import '../src/css/style.css'
import '@fontsource-variable/open-sans'
import '@fontsource/baumans'
import Inicio from './routes/inicio'
import AcercaDe from './routes/acerca_de'
import Galeria from './routes/galeria'
import Logros from './routes/logros'

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
    path: '/galeria',
    element: <Galeria />
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
