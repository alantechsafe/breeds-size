import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  
  i18n.changeLanguage('pt');
  
  return (
    <div className="App">
      <h1>{t('test')}</h1>
    </div>
  );
}

export default App;
