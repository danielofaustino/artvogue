import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

import Services from './Pages/Services';
import Aboutus from './Pages/Aboutus';

function App() {
  return (
    <div className="App container-flex">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Aboutus} />
          <Route path="/services/:id" exact component={Services} />
          <Route path="/contatos" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
