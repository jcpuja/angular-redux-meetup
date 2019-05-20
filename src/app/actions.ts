import {Action, AnyAction} from 'redux';
import {EnterpriseRandom} from './model';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ENTERPRISE_RANDOM = 'ENTERPRISE_RANDOM';

export const increment = (): Action => ({
  type: INCREMENT
});

export const decrement = (): Action => ({
  type: DECREMENT
});

export const enterpriseRandomRequest = (): AnyAction => ({
  type: ENTERPRISE_RANDOM,
  status: 'request'
});

export const enterpriseRandomSuccess = (payload: EnterpriseRandom): AnyAction => ({
  type: ENTERPRISE_RANDOM,
  status: 'success',
  payload
});
