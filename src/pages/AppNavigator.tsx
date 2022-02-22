import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import '../stylesheets/public.scss';
import '../stylesheets/pc.scss';
import '../stylesheets/mobile.scss';

import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import useMediaQueryType from "src/hooks/useMediaQueryType";
import MediaQuery from "src/enums/MediaQuery";
import Navigation from "src/components/Navigation";


const AppNavigator: React.FC = () => {
  const { value: mediaQuery } = useMediaQueryType();

  return (
    <div className={`elysia ${mediaQuery === MediaQuery.PC ? 'view-w' : 'view-m'}`}>
      <Router>
        <Navigation />
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
    </div>
  )
}

export default AppNavigator;