import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Slick from './components/Slick/Slick';
import About from './components/About/About';

function App() {
  return (
    <div className="App container-flex">
      <Header />
      <Gallery />
      <Slick />
      <About />
    </div>
  );
}

export default App;
