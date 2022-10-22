import {createBrowserRouter} from "react-router-dom";
import About from "../components/About/About";
import Divisions from "../components/Divisions/Divisions";
import Error from "../components/Error/Error";
import Hotels from "../components/Hotels/Hotels";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Places from "../components/Places/Places";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/divisions",
                loader: () => fetch("https://tour-on-bangladesh-server.vercel.app/divisions"),
                element: <Divisions></Divisions>
            },
            {
                path: "/places",
                loader: () => fetch("https://tour-on-bangladesh-server.vercel.app/places"),
                element: <Places></Places>
            },
            {
                path: "/hotels",
                loader: () => fetch("https://tour-on-bangladesh-server.vercel.app/hotels"),
                element: <Hotels></Hotels>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ],
        errorElement: <Error></Error>
    }
]);

export default router;