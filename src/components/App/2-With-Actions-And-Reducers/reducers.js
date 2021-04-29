import { actionTypes } from './actions';

const initialState = {
  count: 0,
  total: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.counter.UPDATE:
      return {
        count: action.payload.value,
      };
    case actionTypes.total.DEPOSIT:
      return {
        total: state.total + state.count,
      };
    case actionTypes.total.WITHDRAW:
      return {
        total: state.total - state.count,
      };
    default:
      return {
        // Caution - you'd need a brand new object, not a shallow copy!
        ...state,
      };
  }
};

export default reducers;
