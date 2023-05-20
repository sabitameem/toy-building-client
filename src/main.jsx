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
import PrivateRoute from './Provider/PrivateRoute';
import DetailsToys from './pages/DetailsToys';

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
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/detailsToys/:id',
        element: <PrivateRoute><DetailsToys></DetailsToys></PrivateRoute>,
        loader: ({params})=> fetch(`https://toy-building-server.vercel.app/addAToy/${params.id}`)
      },
      {
        path:'/allToys',
        element: <AllToys></AllToys>
      },
      {
        path:'/addAToys',
        element: <PrivateRoute><AddAToys></AddAToys></PrivateRoute>
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
