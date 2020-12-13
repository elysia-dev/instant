import React from 'react';
import '../src/mobile/css/mobileStyle.scss';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
// import Main from './mobile/modules/main/Main';
// import Contact from './modules/contact/Contact';
// import UserAgreement from './modules/UserAgreement';
// import PrivacyPolicy from './modules/PrivacyPolicy';
// import Disclaimer from './modules/Disclaimer';
// import Footer from './modules/footer/Footer';
import MainMobile from './mobile/modules/main/Main';
import ContactMobile from './mobile/modules/contact/Contact';
import UserAgreementMobile from './mobile/modules/UserAgreement';
import PrivacyPolicyMobile from './mobile/modules/PrivacyPolicy';
import DisclaimerMobile from './mobile/modules/Disclaimer';
import FooterMobile from './mobile/modules/footer/Footer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <ContactMobile />
        </Route>
        <Route path="/userAgreement">
          <UserAgreementMobile />
        </Route>
        <Route path="/privacyPolicy">
          <PrivacyPolicyMobile />
        </Route>
        <Route path="/disclaimer">
          <DisclaimerMobile />
        </Route>
        <Route path="*">
          <MainMobile />
        </Route>
      </Switch>
      <FooterMobile />
    </Router>
  );
}

export default App;
