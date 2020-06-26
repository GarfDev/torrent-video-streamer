import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { ContainerState as LanguageProviderState } from '../modules/LanguagePropvier/types';
import SessionState from 'modules/@core/Session/reducer';
export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga: any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: string;
  saga: () => IterableIterator<any>;
  mode?: string | undefined;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  readonly session: SessionState;
  readonly language: LanguageProviderState;
  // for testing purposes
  readonly test: any;
}
