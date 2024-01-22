import React from "react";
import  ReactDOM  from "react-dom/client";


import Header from "./header.js";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Timeline from "./Timeline.js";
import Register from "./Register";
import About from "./About.js";
import Speaker from "./Speaker.js";
import Gallery from "./Gallery.js";
import NewsArticle from "./Articles.js";

const App=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
const Approuter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/schedule',
                element:<Timeline/>
            },{
                path:'/register',
                element:<Register/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/speaker',
                element:<Speaker/>
            },
            {
                path:'/gallery',
                element:<Gallery/>
            },
            {
                path:'/articles',
                element:<NewsArticle/>
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={Approuter}/>);