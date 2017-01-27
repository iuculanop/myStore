// Central point for choosing the type of history (HTML5 or hash-based)

// import hashHistory from 'react-router/lib/hashHistory';
// export const appHistory = hashHistory;

// import { browserHistory } from 'react-router';

import { createHistory } from 'history';
import { useRouterHistory } from 'react-router';
const history = useRouterHistory(createHistory)({
  basename: document.getElementsByTagName('base')[0].getAttribute('href'),
});

export const appHistory = history;
