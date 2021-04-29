import { actionTypes } from '../actions';

export const initialState = 0;

const count = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.counter.UPDATE:
      return state + action.payload.value;
    default:
      return state;
  }
};

export default count;
