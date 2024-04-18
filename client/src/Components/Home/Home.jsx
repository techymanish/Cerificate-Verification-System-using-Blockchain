import React from "react";
import "../Home/style.css";
import videoBg from "../video.mp4"
import { Outlet,Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="main">
        <div className="overlay">
          <video src={videoBg} autoPlay loop muted />
        </div>
        <div className="content">
          <div className="container">
            <div className="textBox">
              Certificate Verification System using Blockchain
            </div>
            <div className="line" />
            <div className="buttonHolder">
            <Link to="/login"><button className="primary-two">Login</button></Link>
            <Link to="/signup"> <button className="primary-two">Sign up</button></Link> 
            </div>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Home;
