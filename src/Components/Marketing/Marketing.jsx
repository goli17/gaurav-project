import React from "react";
import "./Marketing.css";
import Image from "next/image";
import Screenshot from "../../Assets/Screenshot.png";
import featuredata from "./Featuresdata";
const Marketing = () => {
  return (
    <>
      <div className="Marketing">
        <div className="Market-container">
          <div className="Marketing-heading">
            <h1>A more effective way to track progress</h1>
            <p>
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website in just minutes with the set of free
              components for Framer.
            </p>
          </div>
          <div className="Marketing-image">
            <div className="Marketing-image-container">
              <Image src={Screenshot} className="Image" />
            </div>
          </div>
          <div className="Marketing-features">
            <div className="Marketing-features-container">
              {featuredata.map((item, id) => {
                return (
                  <div key={id}>
                    <span>{item?.icon}</span>
                    <p className="title">{item?.title}</p>
                    <p className="discription">{item?.discription}</p>
                    <span>{item?.learn_more}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
