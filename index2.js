
import React from "react";
import ReactDOM from "react-dom/client";



// let h1=React.createElement("h1",{
//     id :"head3",
//     key : "head3",
//     style : {color : "blue"}
// },"this is head1");

// const container=React.createElement("div",{
//     id : "container",
//     className : "tittle"
//     },[h1,
//         React.createElement("h2",{
//         id :"head2",
//         key : "head2",
//         style : {color : "red"}
//     },"this is head1"),
//     React.createElement("h3",{
//         id :"head3",
//         key : "head3",
//         style : {color : "green"}
//     },"this is head2")]);



// let container = 
// <div>
//     <h1 id="head1" key="head1"  style = {{color :"red" , backgroundColor: "green" }}>this is head 1</h1>
//     <h2 id="head2" key="head2"  style = {{color : "blue" }}>this is head 2</h2>
//     <h3 id="head3" key="head3"  style = {{color : "green"}}>this is head 3</h3>

// </div>





let Container = () => {
    return (
        <div>
            <div style={{ display: "flex" }} id="container">
                <div id="logo" key="logo">
                    <i class="bi bi-basket2" id="l1"></i>
                </div>
                <div id="search" key="search">
                    <input type="text"></input>
                </div >
                <div id="icon" key="icon">
                    <i class="bi bi-person-bounding-box" id="l2"></i>
                </div>
            </div>

        </div>
    )
};







let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);



