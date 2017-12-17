import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { roundOneReducer } from './roundOne';

const rootReducer = combineReducers({
  routing: routerReducer,
  roundOne: roundOneReducer,
}
);

export default rootReducer;
