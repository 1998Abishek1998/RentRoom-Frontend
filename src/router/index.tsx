import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Auth/Login";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: '/home',
        element: <ProtectedRoute Component={Landing}/> ,
    },
    
])

export default router