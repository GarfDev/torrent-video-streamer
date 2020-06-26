import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface CurrentUser {
  fullname: string;
  email: string;
  savedItems: SavedItem[];
}

export interface SavedItem {
  title: string;
  price: number;
  content: string;
  image_url: string;
  url: string;
}

// Actions Type
export type SessionAction = ActionType<typeof actions>;

export interface SessionState {
  readonly currentUser: CurrentUser;
}
