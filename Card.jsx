import React from 'react';
import web from '../src/images/1.jpg';
import app from '../src/images/2.jpg';
import android from '../src/images/3.jpg';
import digital from '../src/images/4.jpg';
import marketing from '../src/images/5.jpg';
import software from '../src/images/6.jpg';
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Card;
