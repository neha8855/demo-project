import React from 'react';
import web from "../src/images/6.jpg";
import { NavLink } from "react-router-dom";

const Aboutdata = (props) => {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h2 className="my-3">
                  About Us
                </h2>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-started">
                  {props.btname}
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img 
                src={props.imgsrc} 
                className="img-fluid" 
                alt="Common img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};
export default Aboutdata;
