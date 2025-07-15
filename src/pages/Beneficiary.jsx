
import React from 'react';
import Header from '../components/Header';
import BeneficiarySection from '../components/BeneficiarySection';

import Footer from '../components/Footer';

const Beneficiary = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BeneficiarySection />
      </main>
      <Footer />
    </div>
  );
};

export default Beneficiary;
