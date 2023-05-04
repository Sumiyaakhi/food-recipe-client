import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main/Main.jsx';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ChefDetail from './Components/ChefDetail/ChefDetail';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Blog from './Components/Blog/Blog';
import AuthProviders from './Components/Provider/AuthProvider';
import AboutUs from './Components/AboutUs/AboutUs';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
       
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/chefCard/:id',
        element:<PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/chefCard/${params.id}`)
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProviders>
     <RouterProvider router={router} />
     </AuthProviders>
  </React.StrictMode>,
)
