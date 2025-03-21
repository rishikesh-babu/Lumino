import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Esports from "../pages/Esports";
import Join from "../pages/Join";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Service";
import About from "../pages/About";
import Home from "../pages/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />
            },
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
            {
                path: 'service',
                element: <Service />
            },
        ]
    }
])

export default router