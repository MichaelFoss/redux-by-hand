import { actionTypes } from './actionTypes';

export const updateCount = value => ({
  type: actionTypes.counter.UPDATE,
  payload: {
    value,
  },
});
