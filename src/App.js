import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";

import HeroSection from './Section/HeroSection';
import CategorySliderSection from "./Section/CategorySliderSection";
import ProductSection from "./Section/ProductSection";
import FoodDeliverySection from "./Section/FoodDeliverySection";
import ArtSection from "./Section/ArtSection";
import RestaurantsSection from "./Section/RestaurantsSection";
import AllProductSection from "./Section/AllProductSection";
import ContactSection from "./Section/ContactSection";
import BridgetSection from "./bridget/BridgetSection";


import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <TopHeader />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CategorySliderSection />
              <ProductSection />
              <FoodDeliverySection />
              <ArtSection />
              <RestaurantsSection />
              <AllProductSection />
            </>
          }
        />
        <Route path="/bridget" element={<BridgetSection />} />
        <Route path="/contact" element={<ContactSection />} />

        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/profile" replace /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
