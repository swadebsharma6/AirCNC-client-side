import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Main from '../layouts/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
])
