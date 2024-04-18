import React from "react";
import videoBg from "../video.mp4"
import SignupPage from "./SignupPage"
function Login() {
  return (
    <div className="main">
      <div className="overlay">
        <video src={videoBg} autoPlay loop muted />
      </div>
      <div className="content">
        <SignupPage/>
      </div>
    </div>
  );
}

export default Login;
