import { actionTypes } from '../action-creators/actionTypes';

export const initialState = 0;

const count = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.counter.UPDATE:
      return action.payload.value;
    default:
      return state;
  }
};

export default count;
