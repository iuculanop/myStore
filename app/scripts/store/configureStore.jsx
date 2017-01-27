import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { appHistory } from 'appHistory';
import { routerMiddleware } from 'react-router-redux';


export default function configureStoreWithAReducer(initialState, rootReducer) {
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(appHistory),
  ];

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');   // eslint-disable-line global-require
    const logger = createLogger({ collapsed: true });
    middlewares.push(logger);
  }

  let enhancer = applyMiddleware(...middlewares);

  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    const compose = require('redux').compose;   // eslint-disable-line global-require
    enhancer = compose(enhancer, window.devToolsExtension());
  }

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/front.jsx', () => {  // NOTE: These paths must be hard-coded
      const nextRootReducer =
          require('../reducers/front.jsx').default;  // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
