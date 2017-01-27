import React from 'react';

// Route definition facilities (from react-router)
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

// Apps
import { FrontendApp } from 'apps/FrontendApp.jsx';
import { EventSearchApp, onEnterEventSearchApp } from 'apps/EventSearchApp.jsx';
import { EventDetailApp, onEnterEventDetailApp } from 'apps/EventDetailApp.jsx';

// Use _.partial to externally define hooks that dispatch actions (injecting the store)
import _ from 'lodash';

function routes(store) {
  return (
    <Route path="/" component={FrontendApp}>
      <IndexRedirect to="/events" />
      <Route
        path="events"
        component={EventSearchApp}
        onEnter={_.partial(onEnterEventSearchApp, store)}
      />
      <Route
        path="event/:eventId"
        component={EventDetailApp}
        onEnter={_.partial(onEnterEventDetailApp, store)}
      />
    </Route>);
}

export const ROUTES = {
  EventSearchApp: '/events',
  EventDetailApp: '/event',
};

export default routes;
