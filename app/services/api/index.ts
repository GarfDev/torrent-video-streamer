import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import { ApiParams } from './types';

export default function apiCaller<T>({ method = 'get', route, headers = {}, data }: ApiParams): Promise<T[] | null> {
  const accessToken = Cookies.get('accessToken');
  const authorizationHeader = accessToken ? { Authorization: accessToken } : {};
  return axios(route, {
    method,
    headers: {
      ...authorizationHeader,
      ...headers,
    },
    data: data ? JSON.stringify(data) : null,
  }).then((response: AxiosResponse) => response.data);
}
