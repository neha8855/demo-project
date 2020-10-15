import React from 'react';
import web from "../src/images/2.png";
import Common from "./Common";


const Home = () => {
  return (
    <>
    <Common 
    name="Grow your business" 
    imgsrc= {web} 
    visit='/about'
    btname="Get Started" 
    />
    </>
  );
};

export default Home;
