import "../assets/styles/home_navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="top_navbar">
      <div className="logo">
       <a href="/"><h1 id="self">SELF TAUGHT</h1></a> 
      </div>
      <div className="authentication_links">
        <Link to="/login">LogIn</Link>
        <Link to="/signup">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
