import {AppState} from './state';
import {AnyAction} from 'redux';
import {DECREMENT, ENTERPRISE_RANDOM, INCREMENT} from './actions';

export const rootReducer = (lastState: AppState, action: AnyAction): AppState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...lastState,
        count: lastState.count + 1
      };

    case DECREMENT:
      return {
        ...lastState,
        count: lastState.count - 1
      };

    case ENTERPRISE_RANDOM:
      if (action.status === 'request') {
        return {
          ...lastState,
          fetching: true
        };
      }

      if (action.status === 'success') {
        return {
          ...lastState,
          count: action.payload.enterpriseRandomNumber,
          fetching: false
        };
      }
  }

  return lastState;
};
