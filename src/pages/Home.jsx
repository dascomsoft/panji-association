
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ActionsSection from '../components/ActionsSection';
import HelpSection from '../components/HelpSection';
import BeneficiarySection from '../components/BeneficiarySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Home = () => {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ActionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
