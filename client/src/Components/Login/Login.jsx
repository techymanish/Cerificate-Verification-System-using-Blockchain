import React from "react";
import videoBg from "../video.mp4"
import LoginPage from "./LoginPage"
function Login() {
  return (
    <div className="main">
      <div className="overlay">
        <video src={videoBg} autoPlay loop muted />
      </div>
      <div className="content">
        <LoginPage/>
      </div>
    </div>
  );
}

export default Login;
