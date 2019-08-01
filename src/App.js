import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.scss';
import HalfScreen from './components/half-screen/half-screen';
import Footer from './components/footer/footer';

function App() {
  const { t, i18n } = useTranslation();
  
  i18n.changeLanguage('pt');
  
  return (
    <div className="app">
        <HalfScreen 
          color="#23b2e3"
          language="pt"
          btnImg="btnPt"
        />
        <HalfScreen 
          color="#fa7b24" 
          language="en"
          btnImg="btnEn"
        />
      {/* <h1>{t('test')}</h1> */}
      <Footer />
    </div>
  );
}

export default App;
