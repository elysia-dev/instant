import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./i18n"

import Main from './modules/pc/main/Main';
import Contact from './modules/pc/contact/Contact';
import PrivacyPolicy from './modules/pc/PrivacyPolicy';
import Disclaimer from './modules/pc/Disclaimer';
import Footer from './modules/pc/footer/Footer';
import RouteWithHeader from './modules/pc/RouteWithHeader';
import ScrollToTop from './modules/pc/ScrollToTop';
import EventPage from './modules/pc/EventPage';

/* mobile */
// import MainMobile from './mobile/modules/main/Main';
// import ContactMobile from './mobile/modules/contact/Contact';
// import PrivacyPolicyMobile from './mobile/modules/PrivacyPolicy';
// import DisclaimerMobile from './mobile/modules/Disclaimer';
// import FooterMobile from './mobile/modules/footer/Footer';
// import EventPageMobile from './mobile/modules/EventPage';

import { useMediaQuery } from "react-responsive";
import { useTranslation } from 'react-i18next';


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
          <RouteWithHeader path="/contact">
            <Contact />
          </RouteWithHeader>
          <RouteWithHeader path="/privacyPolicy">
            <PrivacyPolicy />
          </RouteWithHeader>
          <RouteWithHeader path="/disclaimer">
            <Disclaimer />
          </RouteWithHeader>
          <Route path="/eventPage">
            <EventPage />
          </Route>
          <Route path="*">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
  // const MobileRouter = () => {
  //   return (
  //     <Router>
  //       <ScrollToTop />
  //       <Switch>
  //         <RouteWithHeader path="/contact">
  //           <ContactMobile />
  //         </RouteWithHeader>
  //         <Route path="/privacyPolicy">
  //           <PrivacyPolicyMobile />
  //         </Route>
  //         <Route path="/disclaimer">
  //           <DisclaimerMobile />
  //         </Route>
  //         <Route path="/eventPage">
  //           <EventPageMobile />
  //         </Route>
  //         <Route path="*">
  //           <MainMobile />
  //         </Route>
  //       </Switch>
  //       <FooterMobile />
  //     </Router>
  //   );
  // }
  return (
    // isPc ?
    //   <PcRouter />
    //   :
    //   <MobileRouter />
    <PcRouter />
  );
}

export default App;