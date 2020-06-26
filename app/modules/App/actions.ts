import { action } from 'typesafe-actions';
import ActionTypes from './actionTypes';
import { SessionVerifyParams } from './constants';

export const sessionVerify = (params: SessionVerifyParams, data: any, callback?: (response: any) => void) => {
  return action(ActionTypes.SESSION_VERIFY, {
    params,
    callback,
    data,
  });
};

export const sesionVerifySuccess = (response: any) => {
  const data = response.data;
  return action(ActionTypes.SESSION_VERIFY_SUCCESS, {
    data: data,
  });
};

export const sessionVerifyFailed = () => {
  return action(ActionTypes.SESSION_VERIFY_FAILED, {});
};
