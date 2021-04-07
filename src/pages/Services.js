import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Quotation from '../components/Quotation/Quotation';
import Slick from '../components/Slick/Slick';
import ServicesBox from './ServicesBox';

export default function Services() {
  return (
    <>
      <Header />
      <ServicesBox />
      <Slick />
      <Quotation />
      <Footer />
    </>
  );
}
