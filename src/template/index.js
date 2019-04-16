import React, { createContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import Public from './Public';

export const PublicContext = createContext({});

export default function Template() {

  return (<HashRouter>
    <Switch>
      <Routes />
    </Switch>
  </HashRouter>);
}

const Routes = () => {
  return routes.map((route, index) => {
    const { Component, path } = route;
    return (
      <Route
        exact
        path={path}
        key={index}
        render={ (route) => <Public
          Component={Component}
          route={route}
        /> }
      />
    );
  });
};