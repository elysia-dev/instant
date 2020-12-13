import React from 'react';
// import './css/style.scss';
import './mobile/css/mobileStyle.scss';
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

 /*mobile */
import MainMobile from './mobile/modules/main/Main';
import UserAgreementMobile from './mobile/modules/UserAgreement';
import PrivacyPolicyMobile from './mobile/modules/PrivacyPolicy';
import DisclaimerMobile from './mobile/modules/Disclaimer';
import FooterMobile from './mobile/modules/footer/Footer';

import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";


const App = () => {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });
  const PcRouter = () => {
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
  const MobileRouter = () => {
    return (
    <Router>
      <Switch>
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
  return (
    isPc ? 
    <PcRouter/> 
    :
    <MobileRouter />
  );
}

export default App;