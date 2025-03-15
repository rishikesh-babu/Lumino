import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Esports from "../pages/Esports";
import Join from "../pages/Join";
import Portfolio from "../pages/Portfolio";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'blog',
                element: <Blog /> 
            },
            {
                path: 'contact',
                element: <Contact /> 
            },
            {
                path: 'esports',
                element: <Esports /> 
            },
            {
                path: 'join',
                element: <Join /> 
            },
            {
                path: 'portfolio',
                element: <Portfolio /> 
            },
        ]
    }
])

export default router