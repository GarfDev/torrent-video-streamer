import axios from 'axios';
import Cookies from 'js-cookie';

let refreshTokenPromise: Promise<any> | null = null;

export const getRefreshTokenPromise = () => refreshTokenPromise;

export const refreshTokens = (domain: string) => {
  const refreshToken = Cookies.get('refreshToken');
  const data = { refresh_token: refreshToken };
  refreshTokenPromise = axios
    .post(`${domain}/api/tokens/refresh`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      const { data: responseData } = response;
      Cookies.set('accessToken', responseData.tokens.access);
      Cookies.set('refreshToken', responseData.tokens.refresh);
      refreshTokenPromise = null;
      return responseData;
    })
    .catch(error => {
      refreshTokenPromise = null;
      if (error.response) {
        if (error.response.status === 401) {
          Cookies.set('accessToken', '');
          Cookies.set('refreshToken', '');
          Cookies.set('id', '');
        }
      }
    });

  return refreshTokenPromise;
};
