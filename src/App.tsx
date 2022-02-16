import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./i18n"

<<<<<<< HEAD
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
import EventPageMobile from './mobile/modules/EventPage';
=======
import Main from './modules/pc/main/Main';
import PrivacyPolicy from './modules/pc/PrivacyPolicy';
import Disclaimer from './modules/pc/Disclaimer';
import Footer from './modules/pc/footer/Footer';
import RouteWithHeader from './modules/pc/RouteWithHeader';
import ScrollToTop from './modules/pc/ScrollToTop';
import AppPage from './modules/AppLink';

import MainMobile from './modules/mobile/main/Main';
import FooterMobile from './modules/mobile/footer/Footer';
>>>>>>> 45041ee762e3939ba0c0195a32c79be50c549ba4

import { useMediaQuery } from "react-responsive";
import { useTranslation } from 'react-i18next';
import AppLink from './modules/AppLink';
import AppLinkCh from './modules/AppLinkCh';


const App = () => {
  const { i18n } = useTranslation();
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  });

  useEffect(() => {
    // ref http://www.lingoes.net/en/translator/langcode.htm
    let lang = navigator.language;
    lang = lang.toLowerCase().substring(0, 2);

    if (lang.includes('ko')) {
      i18n.changeLanguage('ko')
    } else if (lang.includes('zh')) {
      i18n.changeLanguage('zhHans')
    } else { 
      i18n.changeLanguage('en')
    }
  }, [])

  const PcRouter = () => {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
<<<<<<< HEAD
          <RouteWithLayout path="/contact">
            <Contact />
          </RouteWithLayout>
          <RouteWithLayout path="/privacyPolicy">
=======
          <RouteWithHeader path="/privacyPolicy">
>>>>>>> 45041ee762e3939ba0c0195a32c79be50c549ba4
            <PrivacyPolicy />
          </RouteWithLayout>
          <RouteWithLayout path="/disclaimer">
            <Disclaimer />
<<<<<<< HEAD
          </RouteWithLayout>
          <RouteWithLayout header={false} path="/eventPage">
            <EventPage />
          </RouteWithLayout>
          <Route path="/app">
            <AppLink />
=======
          </RouteWithHeader>
          <Route path="/AppLink">
            <AppPage />
>>>>>>> 45041ee762e3939ba0c0195a32c79be50c549ba4
          </Route>
          <Route path="/appch">
            <AppLinkCh />
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
<<<<<<< HEAD
          <RouteWithLayout path="/contact" isPc={false}>
=======
          {/* <RouteWithHeader path="/contact">
>>>>>>> 45041ee762e3939ba0c0195a32c79be50c549ba4
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
<<<<<<< HEAD
          </RouteWithLayout>
          <Route path="/app">
            <AppLink />
          </Route>
          <Route path="/appch">
            <AppLinkCh />
=======
          </Route> */}
          <Route path="*">
            <MainMobile />
>>>>>>> 45041ee762e3939ba0c0195a32c79be50c549ba4
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