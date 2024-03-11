"use client";
import { useState } from "react";
import Image from "next/image";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Image src={logo} alt="image" width={200} height={50} />
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <TiThMenu />
          </div>
          <ul className={`navbar-items ${showMenu ? "show" : ""}`}>
            <li>About</li>
            <li>Features</li>
            <li>Customers</li>
            <li>Updates</li>
            <li>Help</li>
            <button className="button">Get for free</button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
