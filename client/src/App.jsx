import CertificateForm from "./Components/Form/CertificateForm"
import Verify from "./Components/Form/Verify";
import Home from "./Components/Home/Home";
import videoBg from "./Components/video.mp4";
function App() {
  return (
    <>
    <div className="main">
      <div className="overlay">
      <video src={videoBg} autoPlay loop muted/>
      </div>
      <div className="content">
      <Verify/>
      </div>
      
    </div>
     
    </>
  );
}

export default App;
