import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#7D170A] flex flex-col items-center text-white">
        <Header />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
