import { actionTypes } from '../actions';

export const initialState = 0;

const total = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.total.DEPOSIT:
      return state + action.payload.value;
    case actionTypes.total.WITHDRAW:
      return state - action.payload.value;
    default:
      return state;
  }
};

export default total;
