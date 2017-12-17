import { ROUND_ONE } from '../../constants';
import { initialState } from './initialState';

export default function startReducer(state = initialState.progress, action) {
  switch (action.type) {
    case ROUND_ONE.PROGRESS.START:
      return { ...state, progress: ROUND_ONE.PROGRESS.IN_PROGRESS, isStarted: true };
    default:
      return state;
  }
}
