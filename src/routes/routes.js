import {createBrowserRouter} from "react-router-dom";
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
                element: <Divisions></Divisions>
            },
            {
                path: "/places",
                element: <Places></Places>
            },
            {
                path: "/hotels",
                element: <Hotels></Hotels>
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