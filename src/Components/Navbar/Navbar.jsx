import React from "react";
import Image from "next/image";
import "./Navbar.css";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {" "}
          <div className="navbar-logo">
            <Image src={logo} alt="image" width={200} height={50} />
          </div>
          <div>
            <ul className="navbar-items">
              <li>About</li>
              <li>Features</li>
              <li>Custormes</li>
              <li>Updates</li>
              <li>Help</li>
              <button className="button">Get for free</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
