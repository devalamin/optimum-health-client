import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import UpdateReview from "../../Pages/MyReview/UpdateReview";
import Register from "../../Pages/Register/Register";
import AllServices from "../../Pages/Services/AllServices/AllServices";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://optimum-health-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/allservices',
                element: <PrivateRoute><AllServices></AllServices></PrivateRoute>,
                loader: () => fetch('https://optimum-health-server.vercel.app/allservices')
            },
            {
                path: '/addingservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>

            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://optimum-health-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])