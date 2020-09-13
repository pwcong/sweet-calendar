import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import VW from 'vw-flexible';

import createStore from '@/store';
import App from './pages/app';

import './global.scss';

new VW({
  width: 360,
});

const { store, persistor } = createStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
