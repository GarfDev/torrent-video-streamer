import { action } from 'typesafe-actions';
import ActionTypes from './actionTypes';
import { User } from 'firebase';

export const detectPreviousSession = () => {
  return action(ActionTypes.DETECT_PREVIOUS_SESSION);
};

export const detectPreviousSessionFailed = () => {
  return action(ActionTypes.DETECT_PREVIOUS_SESSION_FAILED);
};

export const verifyPreviousSession = () => {
  return action(ActionTypes.VERIFY_PREVIOUS_SESSION);
};

export const verifyPreviousSessionSuccess = (currentUser: User) => {
  return action(ActionTypes.VERIFY_PREVIOUS_SESSION_SUCCESS, {
    currentUser,
  });
};

export const verifyPreviousSessionFailed = () => {
  return action(ActionTypes.VERIFY_PREVIOUS_SESSION_FAILED);
};
