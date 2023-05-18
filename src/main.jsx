import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Home/main/Main';
import HomePage from './Home/home/HomePage';
import MyToys from './pages/MyToys';
import AllToys from './pages/AllToys';
import AddAToys from './pages/AddAToys';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <HomePage></HomePage>
      },
      {
        path:'/myToys',
        element:<MyToys></MyToys>
      },
      {
        path:'/allToys',
        element: <AllToys></AllToys>
      },
      {
        path:'/addAToys',
        element: <AddAToys></AddAToys>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
