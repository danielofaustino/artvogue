import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Slick from './components/Slick/Slick';

function App() {
  return (
    <div className="App container-flex">
      <Header />
      <Gallery />
      <Slick />
    </div>
  );
}

export default App;
