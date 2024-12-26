import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./views/Splash";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 스플래시 화면 */}
        <Route path="/" element={<Splash />} />
        {/* 홈 화면 */}
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
