import { useState } from "react";
 

 let title =(  
      <>
      <img id="img" alt="log" src="https://www.lovefoodheaven.com/v3/wp-content/uploads/2020/06/Food-Heaven-Logo-copy-1.png"/>
      </>
     )

let color={
    color : "black",
    fontSize : "20px"
   };
   
 const Header =()=>{
  const[login,setLogin]=useState(true);
    return (
 
         <div className='head'>      
           {title}
           <div className ="nav-items">
           <ul style={color}>
              <li key="home">Home</li>
              <li key="contact">contact</li>
              <li key="about">About</li>
              <li key="cart">cart</li>
             </ul>  
             </div> 
             {
              (login)?<button onClick={()=> setLogin(false)}>login</button> :
              <button onClick={()=>setLogin(true)}>logout</button>
             }
             
         </div>
     )
 }
 export default  Header;