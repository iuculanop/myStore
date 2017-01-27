import { combineReducers } from 'redux';

import db from './events-db.jsx';
import search from './events-search.jsx';

const events = combineReducers({
  db,
  search,
});

export default events;
