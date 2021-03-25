import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App container-flex">
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
