import React from 'react';
import About from '../components/About/About';
import ClientsBrand from '../components/ClientsBrand/ClientsBrand';
import ClientsCounter from '../components/ClientsCounter/ClientsCounter';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Aboutus() {
  return (
    <>
      <Header />

      <About />

      <ClientsCounter />
      <ClientsBrand />

      <Footer />
    </>
  );
}
