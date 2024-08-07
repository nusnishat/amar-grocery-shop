import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import AboutUs from './pages/Home/HomeComponents/AboutUs/AboutUs.jsx';
import ContactUs from './pages/Home/HomeComponents/ContactUs/ContactUs.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import Login from './pages/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/aboutUs",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/contactUs",
        element:<ContactUs></ContactUs>
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
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
