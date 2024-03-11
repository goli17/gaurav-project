import React from "react";
import "./Signup.css";
import Image from "next/image";
import star_png from "../../Assets/star.png";
import spring_png from "../../Assets/spring.png";
const Signup = () => {
  return (
    <>
      <div className="signup">
        <div className="signup-container">
          <div className="signup-img1">
            <Image src={star_png} height={300} className="Image-signup" />
          </div>
          <div className="signup-content">
            <div className="signup-content-heading">
              <h1>Sign up for free today</h1>
              <p>
                Celebrate the joy of accomplishment with an app designed to
                track your progress and motivate your efforts
              </p>
            </div>
            <div className="buttons">
              <button>Get for free</button>
              <p>Learn more &gt;</p>
            </div>
          </div>
          <div className="signup-img2">
            <Image src={spring_png} height={300} className="Image-signup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
