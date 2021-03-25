import './App.css';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container-flex">
      <Header />

      <h1>Voce Ciclou {count} vezes</h1>

      <Button onClick={() => setCount(count + 1)}>Click</Button>
    </div>
  );
}

export default App;
