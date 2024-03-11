import React from "react";
import "./Pricing.css";
import { IoCheckmarkSharp } from "react-icons/io5";

const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="pricing-container">
          <div className="pricing-heading">
            <h1>A more effective way to track progress</h1>
            <p>
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website in just minutes with the set of free
              components for Framer.
            </p>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-container">
              <div className="card">
                <div className="card-tag">Free</div>
                <div className="card-cost">
                  <span>
                    <p className="price">$0</p>/ monthly
                  </span>
                </div>
                <button className="buttonn">Get Started for Free</button>
                <div className="card-pros">
                  <ul>
                    <li>
                      <IoCheckmarkSharp />
                      Up to 5 project members
                    </li>
                    <li>
                      <IoCheckmarkSharp />
                      Unlimited tasks and projects
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      2GB storage
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      Integrations
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      Basic support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-2">
                <div className="card-tag">Pro</div>
                <div className="card-cost">
                  <span>
                    <p className="price">$9</p>/ monthly
                  </span>
                </div>
                <button className="buttonn"> Sign up now</button>
                <div className="card-pros">
                  <ul>
                    <li>
                      <IoCheckmarkSharp />
                      Up to 50 project members
                    </li>
                    <li>
                      <IoCheckmarkSharp />
                      Unlimited tasks and projects
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      50GB storage
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      Integrations
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      Priorty support
                    </li>
                    <li>
                      <IoCheckmarkSharp />
                      Advance Support
                    </li>
                    <li>
                      <IoCheckmarkSharp />
                      Export Support
                    </li>{" "}
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card-tag">Business</div>
                <div className="card-cost">
                  {" "}
                  <span>
                    <p className="price">$10</p>/ monthly
                  </span>
                </div>
                <button className="buttonn">Sign up now</button>
                <div className="card-pros">
                  <ul>
                    <li>
                      <IoCheckmarkSharp />
                      Up to 5 project members
                    </li>
                    <li>
                      <IoCheckmarkSharp />
                      Unlimited tasks and projects
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      200GB storage
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      Integrations
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      Dedicated account manager
                    </li>
                    <li>
                      <IoCheckmarkSharp />
                      Custom fields
                    </li>
                    <li>
                      <IoCheckmarkSharp />
                      Advanced analytics
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      Export capabilities
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      API access
                    </li>{" "}
                    <li>
                      <IoCheckmarkSharp />
                      Advanced security features
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
