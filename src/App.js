import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Slick from './components/Slick/Slick';
import About from './components/About/About';
import ClientsCounter from './components/ClientsCounter/ClientsCounter';
import ClientsBrand from './components/ClientsBrand/ClientsBrand';
import Quotation from './components/Quotation/Quotation';
import Footer from './components/Footer/Footer';
// import PageNotFund from './Pages/PageNotFound';
import ServicesBox from './Pages/ServicesBox';

function App() {
  return (
    <div className="App container-flex">
      <Header />

      <Router>
        <Switch>
          <Route path="/" exact component={Gallery} />
          <Route path="/services:title" exact component={ServicesBox} />
        </Switch>
      </Router>
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
