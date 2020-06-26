import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './modules/App';
// Cores
// ConnectedRouterImport
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';
import configureStore from './configStore';
import LanguagePropvier from './modules/LanguagePropvier';
// import FirebaseContext, { Firebase } from './modules/@core/Firebase';
import GlobalStyle from './globalStyles';
// configureStore
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider autoDismiss={true} autoDismissTimeout={6000} transitionDuration={6} placement="top-right">
      <LanguagePropvier>
        <ConnectedRouter history={history}>
          <App />
          <GlobalStyle />
        </ConnectedRouter>
      </LanguagePropvier>
    </ToastProvider>
  </Provider>,
  MOUNT_NODE,
);

declare const module: any;
if (module.hot) {
  module.hot.accept(['./i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  });
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
