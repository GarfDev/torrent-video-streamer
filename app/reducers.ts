import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './utils/history';
import languageProviderReducer from './modules/LanguagePropvier/reducer';
import sessionReducer from './modules/@core/Session/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    session: sessionReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
