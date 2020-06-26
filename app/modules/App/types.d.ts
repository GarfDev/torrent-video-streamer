import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from '../../types';

/* --- STATE --- */

interface SavedItem {
  title: string;
  price: number;
  content: string;
  image_url: string;
  url: string;
}
interface CurrentUser {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  savedItems: SavedItem[];
}
interface SessionState {
  readonly currentUser: CurrentUser;
}

/* --- ACTIONS --- */
type AppActions = ActionType<actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = SessionState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
