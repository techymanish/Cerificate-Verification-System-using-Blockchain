import React from "react";
import videoBg from "../video.mp4"
import Instituition from "./Instituition"
function Login() {
  return (
    <div className="main">
      <div className="overlay">
        <video src={videoBg} autoPlay loop muted />
      </div>
      <div className="content">
        <Instituition/>
      </div>
    </div>
  );
}

export default Login;
