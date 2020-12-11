import React from 'react';
import '../src/css/style.scss';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./i18n"
import Main from './modules/main/Main';
import Contact from './modules/contact/Contact';
import PrivacyPolicy from './modules/PrivacyPolicy';
import Disclaimer from './modules/Disclaimer';
import Footer from './modules/footer/Footer';
import RouteWithHeader from './modules/RouteWithHeader';
import ScrollToTop from './modules/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <RouteWithHeader path="/contact">
          <Contact />
        </RouteWithHeader>
        <RouteWithHeader path="/privacyPolicy">
          <PrivacyPolicy />
        </RouteWithHeader>
        <RouteWithHeader path="/disclaimer">
          <Disclaimer />
        </RouteWithHeader>
        <Route path="*">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
