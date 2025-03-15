import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about";
import Layout from "./Layout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
    }
])

export default router