import React, { createContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Public from './Public';
import Pages from 'app/Pages';
import useGlobal from './useGlobal';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import { Error500 } from './Errors';

const bugsnagClient = bugsnag('8461361f629a0dc006025cb7319ad20f')
bugsnagClient.use(bugsnagReact, React)
const ErrorBoundary = bugsnagClient.getPlugin('react')
export const PublicContext = createContext({});

export default function Template() {
  const global = useGlobal();
  return (<ErrorBoundary><PublicContext.Provider value={global}>
    <Error500
      title="Application Error!"
      message="The application has encountered an unknown error. It doesn't appear to have affected your data, but our technical staff have been automatically notified and will be looking into this with the utmost urgency."
    >
      <HashRouter>
        <Switch>
          <Route render={(route) => <Public
              Component={Pages}
              route={route}
            /> }
          />
        </Switch>
      </HashRouter>
    </Error500>
  </PublicContext.Provider></ErrorBoundary>);
}