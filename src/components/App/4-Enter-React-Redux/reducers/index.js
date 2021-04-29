import { combineReducers } from 'redux';
import count from './count';
import total from './total';

const reducers = combineReducers({
  count,
  total,
});

export default reducers;
