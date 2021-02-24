import React, { useEffect } from 'react';
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
import RouteWithLayout from './modules/RouteWithLayout';
import ScrollToTop from './modules/ScrollToTop';
import EventPage from './modules/EventPage';

/*mobile */
import MainMobile from './mobile/modules/main/Main';
import ContactMobile from './mobile/modules/contact/Contact';
import PrivacyPolicyMobile from './mobile/modules/PrivacyPolicy';
import DisclaimerMobile from './mobile/modules/Disclaimer';
import FooterMobile from './mobile/modules/footer/Footer';
import EventPageMobile from './mobile/modules/EventPage';

import { useMediaQuery } from "react-responsive";
import { useTranslation } from 'react-i18next';
import AppLink from './modules/AppLink';


const App = () => {
  const { i18n } = useTranslation();
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  });

  useEffect(() => {
    // ref http://www.lingoes.net/en/translator/langcode.htm
    const lang = navigator.language;

    if (lang.includes('ko')) {
      i18n.changeLanguage('ko')
    } else if (lang.includes('zh')) {
      i18n.changeLanguage('zh')
    }
  }, [])

  const PcRouter = () => {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <RouteWithLayout path="/contact">
            <Contact />
          </RouteWithLayout>
          <RouteWithLayout path="/privacyPolicy">
            <PrivacyPolicy />
          </RouteWithLayout>
          <RouteWithLayout path="/disclaimer">
            <Disclaimer />
          </RouteWithLayout>
          <RouteWithLayout header={false} path="/eventPage">
            <EventPage />
          </RouteWithLayout>
          <Route path="/app">
            <AppLink />
          </Route>
          <RouteWithLayout header={false} path="*">
            <Main />
          </RouteWithLayout >
        </Switch>
      </Router>
    );
  }
  const MobileRouter = () => {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <RouteWithLayout path="/contact" isPc={false}>
            <ContactMobile />
          </RouteWithLayout>
          <RouteWithLayout path="/privacyPolicy" isPc={false}>
            <PrivacyPolicyMobile />
          </RouteWithLayout>
          <RouteWithLayout path="/disclaimer" isPc={false}>
            <DisclaimerMobile />
          </RouteWithLayout>
          <RouteWithLayout path="/eventPage" isPc={false}>
            <EventPageMobile />
          </RouteWithLayout>
          <Route path="/app">
            <AppLink />
          </Route>
          <RouteWithLayout path="*" isPc={false} header={false}>
            <MainMobile />
          </RouteWithLayout>
        </Switch>
      </Router>
    );
  }
  return (
    isPc ?
      <PcRouter />
      :
      <MobileRouter />
  );
}

export default App;