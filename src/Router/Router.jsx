import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Romes from "../Page/Rooms/Romes";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import MyBookings from "../Page/MyBookings/MyBookings";
import PriveatRoute from "./PriveatRoute";
import RoomDetails from "../Page/RoomDetails/RoomDetails";
import GiveReview from "../Page/MyBookings/GiveReview";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('https://backend-server-seven.vercel.app/rooms')
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/rooms',
                element: <Romes/>,
                loader: ()=> fetch('https://backend-server-seven.vercel.app/roomsCount')
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/giveReview/:id',
                element: <PriveatRoute><GiveReview/></PriveatRoute>
            },
            {
                path: '/mybookings',
                element: <PriveatRoute><MyBookings/></PriveatRoute>
            },
            {
                path: '/rooms/:id',
                element: <PriveatRoute><RoomDetails/></PriveatRoute>,
                loader: ({params})=> fetch(`https://backend-server-seven.vercel.app/rooms/${params.id}`)

            },
        ]
    }
])

export default Router;