import {AppState} from './state';
import {Action} from 'redux';
import {DECREMENT, INCREMENT} from './actions';

export const rootReducer = (lastState: AppState, action: Action): AppState => {
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
  }

  return lastState;
};
