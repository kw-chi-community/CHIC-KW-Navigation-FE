import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./views/Splash";
import Home from "./views/Home";
import LoginPage from "./views/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 스플래시 화면 */}
        <Route path="/" element={<Splash />} />
        {/* 홈 화면 */}
        <Route path="/Home" element={<Home />} />
        {/* 로그인 화면 */}
        <Route path="/LoginPage" element={<LoginPage />} />
        {/* 모달 화면 */}
        <Route path="/Modal" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
