import { actionTypes } from './actionTypes';

export const deposit = value => ({
  type: actionTypes.total.DEPOSIT,
  payload: {
    value,
  },
});

export const withdraw = value => ({
  type: actionTypes.total.WITHDRAW,
  payload: {
    value,
  },
});
