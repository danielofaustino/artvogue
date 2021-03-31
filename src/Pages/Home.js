import React from 'react';
import About from '../components/About/About';
import ClientsBrand from '../components/ClientsBrand/ClientsBrand';
import ClientsCounter from '../components/ClientsCounter/ClientsCounter';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/Header/Header';
import Quotation from '../components/Quotation/Quotation';
import Slick from '../components/Slick/Slick';

export default function Home() {
  return (
    <>
      <Header />
      <Gallery />
      <Slick />
      <About />
      <ClientsCounter />
      <ClientsBrand />
      <Quotation />
      <Footer />
    </>
  );
}
