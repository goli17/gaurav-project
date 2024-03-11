import React from "react";
import "./Poster.css";
import Image from "next/image";
import poster_img_1 from "../../Assets/company-logo.png";
import poster_img_2 from "../../Assets/poster.png";
import logo_img_1 from "../../Assets/logo1.png";
import logo_img_2 from "../../Assets/logo2.png";
import logo_img_3 from "../../Assets/logo3.png";
import logo_img_4 from "../../Assets/logo4.png";
import logo_img_5 from "../../Assets/logo5.png";
import logo_img_6 from "../../Assets/logo6.png";
const Poster = () => {
  return (
    <>
      <div className="poster">
        <div className="poster-container">
          <div className="poster-left">
            <h1>Pathway to productivity</h1>
            <p>
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="button-container">
              <button className="button1">Get for free</button>
              <p>Learn more &gt;</p>
            </div>
          </div>
          <div className="poster-right">
            <div className="poster-right-container">
              <Image src={poster_img_2} alt="image" className="poster-image" />
            </div>
          </div>
        </div>
        <div className="logos">
          <div className="logo-container">
            <div className="fade-right">
              <Image src={logo_img_1} height={50} />
            </div>
            <div>
              <Image src={logo_img_2} height={50} />
            </div>
            <div>
              {" "}
              <Image src={logo_img_3} height={50} />
            </div>
            <div>
              {" "}
              <Image src={logo_img_4} height={50} />
            </div>
            <div className="fade-left">
              {" "}
              <Image src={logo_img_5} height={50} />
            </div>
            <div>
              {" "}
              <Image src={logo_img_6} height={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Poster;
