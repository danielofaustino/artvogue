import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React, { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import ReactGa from 'react-ga';

import Home from './Pages/Home';
import Contact from './Pages/Contact';

import Services from './Pages/Services';
import Aboutus from './Pages/Aboutus';
import Privacy from './Pages/Privacy';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-F2V416RW0N');
    ReactGa.pageview(window.location.pathname + window.location.search); // Record a pageview for the given page
  }, []);
  return (
    <div className="App container-flex">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Aboutus} />
          <Route path="/services/:id" exact component={Services} />
          <Route path="/contatos" exact component={Contact} />
          <Route Path="/politica-de-privacidade" exact component={Privacy} />
        </Switch>
      </Router>
      <CookieConsent
        location="bottom"
        containerClasses="cookie"
        buttonText="ACEITAR"
        enableDeclineButton
        cookieName="myAwesomeCookieName2"
        style={{ background: '#FFF', color: '#244479', textAlign: 'center' }}
        buttonStyle={{
          background: '#3968b3',
          color: '#FFF',
          fontSize: '13px',
          borderRadius: '10px',
        }}
        declineButtonStyle={{
          background: '#fe914e',
          color: '#FFF',
          fontSize: '13px',
          borderRadius: '10px',
        }}
        declineButtonText="NÃO ACEITAR"
        expires={150}
      >
        Nós usamos cookies e outras tecnologias para melhorar a sua experiência
        em nosso site.Ao aceitar, você concorda com nossa{' '}
        <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </CookieConsent>
    </div>
  );
}

export default App;
