import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import Layout from './routes/layout'
import About from './routes/about'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/login'

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
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
    ],  
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
