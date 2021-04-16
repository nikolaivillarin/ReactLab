import React from 'react';
import ReactDom from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App.js';
import { configureStore } from './store';
import { Provider } from 'react-redux';

const store = configureStore();
const persistor = persistStore(store);

ReactDom.render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading...</div>}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);