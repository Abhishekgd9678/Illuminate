import React from "react";
import  ReactDOM  from "react-dom/client";





const App=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);