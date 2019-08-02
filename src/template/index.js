import React, { createContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Public from './Public';
import Pages from 'app/Pages';
import useGlobal from './useGlobal';

export const PublicContext = createContext({});

export default function Template() {
  const global = useGlobal();
  return (<PublicContext.Provider value={global}>
    <HashRouter>
      <Switch>
        <Route render={(route) => <Public
            Component={Pages}
            route={route}
          /> }
        />
      </Switch>
    </HashRouter>
  </PublicContext.Provider>);
}