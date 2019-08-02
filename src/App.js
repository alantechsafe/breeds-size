import React, { useState } from 'react';
import './App.scss';
import HalfScreen from './components/half-screen/half-screen';
import Footer from './components/footer/footer';

function App() {
  const [language, setLanguage] = useState()

  const handlePt = () => {
    setLanguage("pt")
  }

  const handleEn = () => {
    setLanguage("en")    
  }
    
  return (
    <div className="app">
        <HalfScreen 
          onClick={handlePt}
          color="#23b2e3"
          language="pt"
          btnImg="btnPt"
          width = {language === "pt" && "0%" }
        />
        <HalfScreen 
          onClick={handleEn}
          color="#fa7b24" 
          language="en"
          btnImg="btnEn"
          width = {language === "en" && "0%" }
        />
      <Footer />
    </div>
  );
}

export default App;
