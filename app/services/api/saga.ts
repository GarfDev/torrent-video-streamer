import { call } from 'redux-saga/effects';
import { ApiResponse, ApiParams } from './types';
import apiCaller from './index';

export function* callApi(apiParams: ApiParams) {
  try {
    const response = yield call(apiCaller, apiParams);
    const responsePayload: ApiResponse = {
      success: true,
      request: apiParams.data,
      response,
    };
    return responsePayload;
  } catch (error) {
    const responsePayload: ApiResponse = {
      success: false,
      request: apiParams.data,
      response: {},
      error,
    };
    return responsePayload;
  }
}
