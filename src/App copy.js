import React from "react";
import TopHeader from "./components/TopHeader";
import HeroSection from './Section/HeroSection'
import ArtCategorySection from "./components/ArtCategorySection";
import PriceFilterSection  from "./Section/PriceFilterSection";

import ProductSection from "./Section/ProductSection";
import  ArtSection from "./Section/ArtSection";
import  NewsletterSection from "./Section/NewsletterSection";



import Footer from "./components/Footer";
import BridgetSection from './bridget/BridgetSection'


import BridgetRileySection from './bridget/BridgetRileySection'






function App() {
  return (
    <div className="App">
      <TopHeader />  
      <HeroSection/>
      <ArtCategorySection/>
      <PriceFilterSection />
       <ProductSection />
       <ArtSection/>
        <NewsletterSection/>
        <BridgetRileySection/>
        <BridgetSection/>    
        <Footer/>
    </div>
  );
}

export default App;
