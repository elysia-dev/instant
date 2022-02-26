import React from 'react';
import '../css/style.scss';
import {
  Route,
} from "react-router-dom";
// import Header from './Header';
// import Footer from './footer/Footer';
// import FooterMobile from './../mobile/modules/footer/Footer';


type Props = {
  path: string,
  header?: boolean,
  footer?: boolean,
  children: React.ReactNode
  isPc?: boolean,
}

const RouteWithLayout: React.FunctionComponent<Props> = (props) => {
  return (
    <Route path={props.path}>
      {/* {props.header && <Header />}
      {props.children}
      {props.footer && props.isPc ? <Footer /> : <FooterMobile />} */}
    </Route>
  )
}

RouteWithLayout.defaultProps = {
  header: true,
  footer: true,
  isPc: true,
}

export default RouteWithLayout