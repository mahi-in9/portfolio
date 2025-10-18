import Home from "./pages/Home";
import Navbar from "./section/Navbar";
import { Routes, Route } from "react-router-dom";
import Name3D from "./components/Canvas/Name3D";

function App() {
  return (
    // <div className="bg-purple-950">
    // {/* <Navbar /> */}
    <div className="mt-9 pt-7">
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <Name3D />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    // {/* </div> */}
  );
}

export default App;
