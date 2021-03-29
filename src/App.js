import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Slick from './components/Slick/Slick';
import About from './components/About/About';
import ClientsCounter from './components/ClientsCounter/ClientsCounter';
import ClientsBrand from './components/ClientsBrand/ClientsBrand';
import Quotation from './components/Quotation/Quotation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App container-flex">
      <Header />
      <Gallery />
      <Slick />
      <About />
      <ClientsCounter />
      <ClientsBrand />
      <Quotation />
      <Footer />
    </div>
  );
}

export default App;
