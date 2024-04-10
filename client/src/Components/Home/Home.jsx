import React from 'react'
import '../Home/style.css';
function Home() {
  return (
    <>
      <div className="container">

        <div className="textBox">
          Certificate Verification System using Blockchain
        </div>
        <div className="line" />
          <div className="buttonHolder">
            <button className="primary">Login</button>
            <button className="primary">Sign up</button>
          </div>
      </div>
    </>
  )
}

export default Home