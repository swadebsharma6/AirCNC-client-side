import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../components/LogIn/Login'
import SignUp from '../components/SignUp/SignUp'
import Main from '../layouts/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
    ],
   
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
])
