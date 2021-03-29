import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Slick from './components/Slick/Slick';
import About from './components/About/About';
import ClientsCounter from './components/ClientsCounter/ClientsCounter';

function App() {
  return (
    <div className="App container-flex">
      <Header />
      <Gallery />
      <Slick />
      <About />
      <ClientsCounter />
    </div>
  );
}

export default App;
