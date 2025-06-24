import {  useState } from "react";
import { HEADER_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src={HEADER_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online: {onlineStatus === true? '✅':'🛑'}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          >--------
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;