import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import React, { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import ReactGA from 'react-ga';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

import Services from './Pages/Services';
import Aboutus from './Pages/Aboutus';

function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    if (window.GA_INITIALIZED) {
      ReactGA.initialize(`${process.env.REACT_APP_GA_TRACKING_CODE}`);
      window.GA_INITIALIZED = true;
    }
    React.GA.set({ page: location.pathname });
    React.pageview(location.pathname);
  }, [location]);
}

function App() {
  usePageViews();
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
      <CookieConsent
        location="bottom"
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
        Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua
        experiência em nosso site.
      </CookieConsent>
    </div>
  );
}

export default App;
