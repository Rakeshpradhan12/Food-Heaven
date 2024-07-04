import React from 'react';
import ReactDOM from "react-dom/client";
//default import and named import respectively

import Header from "./components/Header";
// also can write import title,{Header} from "Components/title.js or jsx";
//also import * as xy from "components/export";
 import Body from "./components/Body.js";
 import Footer from "./components/Footer.js";


const AppLayout =()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}


let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
