import Home from "./Home";
import videoBg from "../video.mp4";
import { RouterProvider } from "react-router-dom";
import router from "../Routes/Routes"
function App() {
  return (
    <>
     <RouterProvider router={router} />

    </>
  );
}

export default App;