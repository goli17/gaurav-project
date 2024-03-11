import React from "react";
import "./Testimonials.css";
import TestimonialData from "./TestimonialsData";

const Testimonials = () => {
  return (
    <>
      <div className="Testimonials">
        <div className="Testimonials-container">
          <div className="Testimonials-heading">
            <h1>What our users say</h1>
          </div>
          <div className="Testimonials-card-container">
            {TestimonialData.map((item, id) => {
              return (
                <div key={id} className="Testimonials-card">
                  <p className="paragraph"> {item?.text}</p>
                  <span className="user">
                    <p>{item?.icon}</p>
                    <span>
                      {" "}
                      <p>{item?.name}</p>
                      <p>{item?.email}</p>
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
