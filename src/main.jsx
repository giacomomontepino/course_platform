import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import Layout from './routes/layout'
import Pricing from './routes/pricing'
import About from './routes/about'
import Contacts from './routes/contacts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],  
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
