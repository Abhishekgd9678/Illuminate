import React from "react";
import  ReactDOM  from "react-dom/client";


import Header from "./header.js";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import WhyAttend from "./WhyAttend.js";

const App=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <WhyAttend/>
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
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={Approuter}/>);