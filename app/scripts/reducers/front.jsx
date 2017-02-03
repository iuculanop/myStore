import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import boxesInfo from './boxes.jsx';
import itemsInfo from './items.jsx';

const rootReducer = combineReducers({
  boxesInfo,
  itemsInfo,
  routing: routerReducer,
});

export default rootReducer;
