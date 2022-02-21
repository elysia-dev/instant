import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import ScrollToTop from 'src/pages/utiles/ScrollToTop';

const AppNavigator: React.FC = () => {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {/* <RouteWithHeader path="/privacyPolicy">
          <PrivacyPolicy />
        </RouteWithHeader>
        <RouteWithHeader path="/disclaimer">
          <Disclaimer />
        </RouteWithHeader>
        <Route path="/AppLink">
          <AppPage />
        </Route> */}
        <Route path="*">
          <Main />
        </Route>
        <Footer />
      </Switch>
    </Router>
  )
}

export default AppNavigator;