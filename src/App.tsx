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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/userAgreement">
          <UserAgreement />
        </Route>
        <Route path="/privacyPolicy">
          <PrivacyPolicy />
        </Route>
        <Route path="/disclaimer">
          <Disclaimer />
        </Route>
        <Route path="*">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
