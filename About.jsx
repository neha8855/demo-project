import React from 'react';
import img from "../src/images/6.jpg";
import Aboutdata from "./Aboutdata";


const About = () => {
  return (
    <>
    <Aboutdata 
    name="Grow your business" 
    imgsrc= {img} 
    visit='/service'
    btname="View More" 
    />
    </>
  );
};
export default About;
