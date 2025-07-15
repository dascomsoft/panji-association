
import React from 'react';
import Header from '../components/Header';
import ActionsSection from '../components/ActionsSection';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Actions = () => {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ActionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Actions;
