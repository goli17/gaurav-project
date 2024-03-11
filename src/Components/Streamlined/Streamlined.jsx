import React from "react";
import "./Streamlined.css";
import Image from "next/image";
import card1_img from "../../Assets/card2.png";
import card2_img from "../../Assets/card1.png";

const Streamlined = () => {
  return (
    <div className="Stream">
      <div className="stream-container">
        <div className="stream-heading">
          <h1>Streamlined for easy management</h1>
          <p>
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="stream-cards">
          <div className="stream-card-left">
            <Image src={card1_img} width={400} height={400} alt="" />
            <p className="title">Integration ecosystem</p>
            <p className="description">
              Enhance your productivity by connecting with your favorite tools,
              keeping all your essentials in one place.
            </p>
          </div>
          <div className="stream-card-right">
            <Image src={card2_img} width={400} height={400} alt=" " />
            <p className="title">Goal setting and tracking</p>
            <p className="description">
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Streamlined;
