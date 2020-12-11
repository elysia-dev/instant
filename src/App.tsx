import React from 'react';
import '../src/css/style.scss';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Main from './modules/main/Main';
import Contact from './modules/contact/Contact';
import UserAgreement from './modules/UserAgreement';
import PrivacyPolicy from './modules/PrivacyPolicy';
import Disclaimer from './modules/Disclaimer';
import Footer from './modules/footer/Footer';
import RouteWithHeader from './modules/RouteWithHeader';

const App = () => {
  return (
    <Router>
      <Switch>
        <RouteWithHeader path="/contact">
          <Contact />
        </RouteWithHeader>
        <RouteWithHeader path="/userAgreement">
          <UserAgreement />
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
