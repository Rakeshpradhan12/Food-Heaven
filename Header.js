import { useState } from "react";
import logo from "../assets/image/food_heaven.png";
import { Link } from "react-router-dom";

let title = (
  <>
    <img id="img" alt="log" src={logo} />
  </>
)

let color = {
  color: "black",
  fontSize: "20px"
};

const Header = () => {
  const [login, setLogin] = useState(true);
  return (

    <div className='head'>
      {title}
      <div className="nav-items">
        <ul style={color}>
          <li key="home">
            <Link to="/" style={{textDecoration:"none"}}>
            Home</Link>
            </li>
          <li key="contact">
            <Link to="/contact" style={{textDecoration:"none"}}>
            contact</Link>
            </li>
          <li key="about">
            <Link to="/about" style={{textDecoration:"none"}}>
            About</Link>
            </li>
          <li key="cart">cart</li>
        </ul>
      </div>

      {
        (login) ?
        <Link to="/login">
         <button onClick={() => setLogin(false)} style={{margin:"10px",padding:"20px"}}>
          log in</button> 
          </Link>
         :<Link to="/">
          <button onClick={() => setLogin(true)} style={{margin:"10px",padding:"20px"}}>
            log out</button>
            </Link>
      }

    </div>
  )
}
export default Header;