import { Method } from 'axios';

export interface ApiParams {
  method: Method;
  route: string;
  headers?: any;
  data?: any;
}

export interface ApiResponse {
  success: boolean;
  request: any;
  response: any;
  error?: any;
}
