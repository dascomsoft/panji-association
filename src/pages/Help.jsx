
import React from 'react';
import Header from '../components/Header';
import HelpSection from '../components/HelpSection';
import Footer from '../components/Footer';

const Help = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HelpSection />
      </main>
      <Footer />
    </div>
  );
};

export default Help;
