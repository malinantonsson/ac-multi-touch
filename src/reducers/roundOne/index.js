import startReducer from './start';

import { ROUND_ONE } from '../../constants';
import { initialState } from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function roundOneReducer(state = initialState, action) {
  switch (action.type) {
    case ROUND_ONE.PROGRESS.START:
      return startReducer(state, action);
    default:
      return state;
  }
}


export { roundOneReducer };
