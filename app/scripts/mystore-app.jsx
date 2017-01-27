import React from 'react';
import { render } from 'react-dom';

// react <-> redux bindings
import { Provider } from 'react-redux';

// Route definition facilities (from react-router)
import Router from 'react-router/lib/Router';
import { appHistory } from 'appHistory';

// Our store
import configureStore from 'store/front.jsx';
const store = configureStore();

// Our routes
import routesFactory from 'routes/mystore-routes.jsx';
const routes = routesFactory(store);

// react-router <-> redux state bindings
import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(appHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app'));
