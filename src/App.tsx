import { useEffect } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./i18n"
import Main from './modules/pc/main/Main';
import PrivacyPolicy from './modules/pc/PrivacyPolicy';
import Disclaimer from './modules/pc/Disclaimer';
import Footer from './modules/pc/footer/Footer';
import RouteWithHeader from './modules/pc/RouteWithHeader';
import ScrollToTop from './modules/pc/ScrollToTop';
import AppPage from './modules/AppLink';
import MainMobile from './modules/mobile/main/Main';
import FooterMobile from './modules/mobile/footer/Footer';
import { useTranslation } from 'react-i18next';
import useMediaQueryType from './hooks/useMediaQueryType';
import MediaQuery from './enums/MediaQuery';

const PcRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <RouteWithHeader path="/privacyPolicy">
          <PrivacyPolicy />
        </RouteWithHeader>
        <RouteWithHeader path="/disclaimer">
          <Disclaimer />
        </RouteWithHeader>
        <Route path="/AppLink">
          <AppPage />
        </Route>
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
      <ScrollToTop />
      <Switch>
        {/* <RouteWithHeader path="/contact">
          <ContactMobile />
        </RouteWithHeader>
        <Route path="/privacyPolicy">
          <PrivacyPolicyMobile />
        </Route>
        <Route path="/disclaimer">
          <DisclaimerMobile />
        </Route>
        <Route path="/eventPage">
          <EventPageMobile />
        </Route> */}
        <Route path="*">
          <MainMobile />
        </Route>
      </Switch>
      <FooterMobile />
    </Router>
  );
}

const App = () => {
  const { i18n } = useTranslation();
  const { value: mediaQuery } = useMediaQueryType();

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

  return (
    mediaQuery === MediaQuery.PC ?
      <PcRouter />
      :
      <MobileRouter />
  );
}

export default App;