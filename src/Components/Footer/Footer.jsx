import React from "react";
import "./Footer.css";
import Image from "next/image";
import logo from "../../Assets/logo.png";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer-container">
          <div className="Footer-left">
            <div className="Footer-top">
              <div className="Footer-left-img">
                <Image src={logo} alt="" width={200} height={50} />
              </div>
              <div className="Footer-left-content">
                <p>
                  Effortlessly turn your ideas into a fully functional,
                  responsive, no-code SaaS website.
                </p>
              </div>
            </div>
            <div className="Footer-left-icons">
              <ul className="icons">
                <li>
                  <RiTwitterXFill />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaYoutube />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer-right">
            <ul className="Footer-right-container">
              <li>
                Product
                <ul className="list-list">
                  <li>Feature</li>
                  <li>Integration</li>
                  <li>Updates</li>
                  <li>FAQ's</li>
                  <li>Priceing</li>
                </ul>
              </li>
              <li>
                Company
                <ul className="list-list">
                  <li>Feature</li>
                  <li>Integration</li>
                  <li>Updates</li>
                  <li>FAQ's</li>
                  <li>Priceing</li>
                </ul>
              </li>
              <li>
                Resources
                <ul className="list-list">
                  <li>Feature</li>
                  <li>Integration</li>
                  <li>Updates</li>
                  <li>FAQ's</li>
                  <li>Priceing</li>
                </ul>
              </li>
              <li>
                Legal
                <ul className="list-list">
                  <li>Feature</li>
                  <li>Integration</li>
                  <li>Updates</li>
                  <li>FAQ's</li>
                  <li>Priceing</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
