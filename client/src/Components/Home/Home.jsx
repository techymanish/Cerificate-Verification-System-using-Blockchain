import React from "react";
import "../Home/style.css";
import videoBg from "../video.mp4";
import { Outlet, Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="main">
        <div className="overlay">
          <video src={videoBg} autoPlay loop muted />
        </div>
        <div className="content">
          <div className="contentContainer">
            <div className="heading">
              <div className="headingText">Certificate Verfication System</div>
            </div>
            <div className="container">
              <div className="box1">
                <div id="head">
                  <div id="headText">About us</div>
                </div>
                <div className="textBox">
                  Welcome to Certificate Verification System, where certificates
                  meet blockchain technology for ultimate security and
                  verification. We streamline the process of issuing and
                  verifying certificates by harnessing the power of blockchain
                  and IPFS. Say goodbye to counterfeit documents and embrace the
                  future of secure certification with us. Join us today and
                  experience hassle-free certificate verification.
                </div>
              </div>
              <div className="line" />
              <div className="buttonHolder">
                <Link to="/signup">
                  <button className="primary-two">Verify a certificate</button>
                </Link>
                <Link to="/signup">
                  {" "}
                  <button className="primary-two">Create a certificate</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Home;
