import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistedStore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
