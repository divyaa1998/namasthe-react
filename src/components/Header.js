import { useState } from "react";
import { HEADER_URL } from "../utils/constants";

const Header = () => {
  
   const [btnName,setbtnName] = useState("login");
    return (
      <div className="header">
        <div className="logocontainer">
          <img
            className="logo"
            src={HEADER_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
           <button className="login-btn" onClick={() => {
            btnName === "login"? setbtnName("logout"):setbtnName("login");
            
           }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;