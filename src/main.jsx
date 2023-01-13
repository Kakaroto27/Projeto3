import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import './index.css'

// paginas
import Início from './routes/Home'
import NewPost from './routes/NewPost'

const router = (createBrowserRouter([
  {
    element: <App/>,
    children: [
      {path: "/",
      element: <Início />
    },
      {path: "/new",
      element: <NewPost/>
    }
    ] 
  }
]))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
