import React from 'react';

// Route definition facilities (from react-router)
import Route from 'react-router/lib/Route';
// import IndexRoute from 'react-router/lib/IndexRoute';

// Apps
import { FrontendApp } from 'apps/FrontendApp.jsx';
import BoxesApp from 'apps/BoxesApp.jsx';

// import { EventDetailApp, onEnterEventDetailApp } from 'apps/EventDetailApp.jsx';

// Use _.partial to externally define hooks that dispatch actions (injecting the store)

function routes() {
  return (
    <Route path="/" component={FrontendApp}>
      <Route path="boxes" component={BoxesApp} />
    </Route>
  );
}

export const ROUTES = {
  AthletesListApp: '/athletes',
  CompRuleApp: '/rules/new',
  CompRulesApp: '/rules',
};

export default routes;
