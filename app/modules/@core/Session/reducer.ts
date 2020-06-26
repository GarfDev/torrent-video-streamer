import { SessionState, SessionAction } from './types';
import ActionTypes from './actionTypes';

// Initial State of Session Reducer
export const initialState: SessionState = {
  currentUser: {
    fullname: '',
    email: '',
    savedItems: [],
  },
};

const SessionReducer = (state: SessionState = initialState, action: SessionAction) => {
  switch (action.type) {
    case ActionTypes.VERIFY_PREVIOUS_SESSION_SUCCESS:
      return action.payload.currentUser;
    default:
      return state;
  }
};

export default SessionReducer;
