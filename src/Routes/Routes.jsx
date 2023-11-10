import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Destination from "../components/Destination/Destination";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import CountryDetails from "../components/CountryDetails/CountryDetails";
import MyBooking from "../components/MyBooking/MyBooking";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children :[
        {
            path :'/',
            element :<Home />
        },
        {
            path :'/login',
            element :<Login />
        },
        {
            path :'/register',
            element :<Register />
        },
        {
            path :'/destination',
            element :<PrivateRoute> <Destination /> </PrivateRoute>
        },
        {
            path :'/about',
            element : <About />
        },
      
        {
            path :'/countries/:id',
            element :  <PrivateRoute> <CountryDetails />,</PrivateRoute>,
            loader :({params})=> fetch(`http://localhost:5000/countries/${params.id}`)
        },
        {
            path :'/booking',
            element :  <PrivateRoute> <MyBooking />,</PrivateRoute>,
            
        }
      ]
    },
  ]);
  

  export default router