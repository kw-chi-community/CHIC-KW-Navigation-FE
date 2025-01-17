import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./views/Splash";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import AmenityPage from "@/views/AroundShop/AmenityPage";

import CafePage from "@/views/AroundShop/CafePage";
import ConveniencePage from "@/views/AroundShop/ConveniencePage";
import RestaurantPage from "@/views/AroundShop/RestaurantPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/main-page" element={<HomePage />} />
        <Route path="/login-page" element={<LoginPage />} />


        {/* 주변 시설 화면 */}
        <Route path="/around-shop/amenity" element={<AmenityPage />} />
        <Route path="/around-shop/cafe" element={<CafePage />} />
        <Route path="/around-shop/convenience-store" element={<ConveniencePage />} />
        <Route path="/around-shop/restaurant" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
