import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Hotel from './pages/Hotel';
import Restaurant from './pages/Restaurant';
import Contact from './pages/Contact';

// Translations
import { translations } from './translations';

import './App.css';

function App() {
  const [language, setLanguage] = useState('fr'); // Default to French

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Load saved language preference
    const savedLanguage = localStorage.getItem('fux-center-language');
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language preference
    localStorage.setItem('fux-center-language', language);
  }, [language]);

  const currentTranslations = translations[language];

  return (
    <Router>
      <Layout 
        language={language} 
        setLanguage={setLanguage} 
        translations={currentTranslations}
      >
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                language={language} 
                translations={currentTranslations} 
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <About 
                language={language} 
                translations={currentTranslations} 
              />
            } 
          />
          <Route 
            path="/services" 
            element={
              <Services 
                language={language} 
                translations={currentTranslations} 
              />
            } 
          />
          <Route 
            path="/packages" 
            element={
              <Packages 
                language={language} 
                translations={currentTranslations} 
              />
            } 
          />
          <Route 
            path="/hotel" 
            element={
              <Hotel 
                language={language} 
                translations={currentTranslations} 
              />
            } 
          />
          <Route 
            path="/restaurant" 
            element={
              <Restaurant 
                language={language} 
                translations={currentTranslations} 
              />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Contact 
                language={language} 
                translations={currentTranslations} 
              />
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

