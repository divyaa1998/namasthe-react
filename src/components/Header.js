import {  useState } from "react";
import { HEADER_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100  shadow-lg sm:bg-yellow-100">
      <div className="logocontainer">
        <img className="w-44" src={HEADER_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online: {onlineStatus === true? '✅':'🛑'}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;