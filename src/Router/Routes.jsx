import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Users from "../Pages/Users";
import PrivateRoute from "./PrivateRoutes";
import CoffeeDetails from "../Pages/CoffeeDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('https://coffee-store-server-gamma-amber.vercel.app/coffee') 
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updatedCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`https://coffee-store-server-gamma-amber.vercel.app/coffee/${params.id}`)
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path:'/users',
                element:<PrivateRoute><Users></Users></PrivateRoute>,
                loader: () => fetch('https://coffee-store-server-gamma-amber.vercel.app/user')
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>,
                loader: () => fetch('https://coffee-store-server-gamma-amber.vercel.app/coffee')
            }
        ]
    }
]);

export default router;