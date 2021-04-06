import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';

export default function Home() {
  return (
    <>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
