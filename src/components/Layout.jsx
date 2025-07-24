import React from 'react';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const Layout = ({ children, language, setLanguage, translations }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        translations={translations} 
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer 
        language={language} 
        translations={translations} 
      />
    </div>
  );
};

export default Layout;

