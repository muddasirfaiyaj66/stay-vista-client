import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import ErrorPage from '../Pages/ErrorPage'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'


export const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/room/:id',
        element:<RoomDetails></RoomDetails>
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  
])