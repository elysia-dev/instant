import React from 'react';
import './css/style.scss';
import {
  Route,
} from "react-router-dom";
import Header from './Header';

type Props = {
  path: string,
  children: React.ReactNode
}

const RouteWithHeader = (props: Props) => {
  return (
    <Route path={props.path}>
      <Header />
      {props.children}
    </Route>
  )
}

export default RouteWithHeader