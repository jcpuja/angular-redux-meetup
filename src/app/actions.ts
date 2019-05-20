import {Action} from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (): Action => ({
  type: INCREMENT
});

export const decrement = (): Action => ({
  type: DECREMENT
});
