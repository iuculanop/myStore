import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import boxes from './boxes.jsx';

const rootReducer = combineReducers({
  boxes,
  routing: routerReducer,
});

export default rootReducer;
